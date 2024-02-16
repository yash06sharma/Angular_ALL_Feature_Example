import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent  implements OnInit{

    /**
     * Inject the dependency injection.
     * @param dialogRef: MatDialogRef<PopupComponent>
     * @param data:any
     */
    constructor(
      public dialogRef: MatDialogRef<PopupComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      ){}

    /**
     * for user id.
     * id:number
     */
    id:number = 0;

    /**
     * To intialize
     * @return void
     */
    ngOnInit(): void {
        this.id = this.data.id;

    }
    /**
     * Delete user record based on ID.
     * @param id
     * @return void
     */
    deleteButton(id:any):void{
      this.dialogRef.close(id);
    }

}
