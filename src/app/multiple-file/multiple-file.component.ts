import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { ExampleServiceService } from '../Servicess/example-service.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * interface FileData
 */
interface FileData {
  data: any;
  inProgress: boolean;
  progress: number;
}

@Component({
  selector: 'app-multiple-file',
  templateUrl: './multiple-file.component.html',
  styleUrls: ['./multiple-file.component.css']
})

export class MultipleFileComponent implements OnInit {

    progress_Toggel:boolean = false;

    /**ViewChild */
    @ViewChild("fileUpload", {static: false}) fileUpload!: ElementRef;

    /** files: FileData[]*/
    files: FileData[] = [];

    /**Dependency injection */
    constructor(private db:ExampleServiceService){}

    /**
     * @return void
     */
    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }

    /**
     * UploadFile in service

    * @param file
     */
    uploadFile(file:any): void {
      const formData = new FormData();
      formData.append('file', file.data);
      file.inProgress = true;
          this.db.upload(formData).pipe(
            map((event:any) => {
              switch (event.type) {
                case HttpEventType.UploadProgress:
                  file.progress = Math.round(event.loaded * 100 / event.total);
                  break;
                case HttpEventType.Response:
                  return event;

              }
            }),catchError((error: HttpErrorResponse) => {
              file.inProgress = false;
              return of(`${file.data.name} upload failed.`);
            })).subscribe((event: any) => {
              if (typeof (event) === 'object') {
                // console.log(event.body);

              }
            });
    }

    /**
     * @returns void
     */
    private uploadFiles():void {
        this.fileUpload.nativeElement.value = '';
        this.files.forEach(file => {
            this.uploadFile(file);
      });
  }

  /**
   * @return void
   */
    onClick():void {
        const fileUpload = this.fileUpload.nativeElement;
        fileUpload.onchange = () => {
        for (let index = 0; index < fileUpload.files.length; index++)
        {
            const file = fileUpload.files[index];
            this.files.push({ data: file, inProgress: false, progress: 0});
        }
            this.uploadFiles();
        };
          fileUpload.click();
    }
}




