import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';

@Component({
  selector: 'app-imagecrop',
  templateUrl: './imagecrop.component.html',
  styleUrls: ['./imagecrop.component.css']
})
export class ImagecropComponent implements OnInit {

  name = 'Angular';

  imageChangedEvent: any = '';
  croppedImage: any | undefined;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    // console.log(event);

}

// imageCropped(e: ImageCroppedEvent) {
//   this.croppedImage = e.blob;
//   // console.log(this.croppedImage)

// }


    imageCropped(e: ImageCroppedEvent) {
        if (e.blob) {
            const reader = new FileReader();
            reader.readAsDataURL(e.blob);
            reader.onload = () => {
              this.croppedImage = reader.result as string;
            };
            console.log(this.croppedImage);
        }
    }

// You can also implement other event handlers if neede

    imageLoaded() {
      // show cropper
    }
    cropperReady() {
      // cropper ready
    }
    loadImageFailed() {
      // show message
    }



}
