import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    /**
     * addFormRecord: FormGroup
     * For user form instance.
     */
    addFormRecord!: FormGroup;
    /**
     * submitted:boolen
     * To check the form is true or false.
     */
    submitted:boolean=false;
    /**
     * position:number
     * To get the user id
     */
    position:number= 0;

    /**
     * To inject the dependency injection.
     * @param fb
     * @param dialogRef
     * @param data
     */
    constructor(
      private fb:FormBuilder,
      public dialogRef: MatDialogRef<AddUserComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      ){}
     /**
      * editButton:any
      * addButton:any
      *  To hide and display button
      */
    editButton:any = 'none';
    addButton:any = 'block';
    /**
     *
     * To instialize.
     * @return void
     */
    ngOnInit(): void {
        this.getUserData();
        this.patchDataValue();
            if(this.data.edit){
                this.editButton = 'block';
                this.addButton = 'none';
            }
    }
    /**
     * Data come into the fileds to edit & update
     * @return void
     */
    patchDataValue():void{
        if(this.data !== null){
            this.position = this.data.userdata.position;
            this.addFormRecord.controls['name'].setValue(this.data.userdata.name);
            this.addFormRecord.controls['email'].setValue(this.data.userdata.email);
            this.addFormRecord.controls['address'].setValue(this.data.userdata.address);
        }
    }
    /**
     * Controls for addFormRecord
     * @return
     */
    get f() {
        return this.addFormRecord.controls;
    }
    /**
     * AddFormRecord Form
     * @return void
     */
    getUserData():void {
        this.addFormRecord = this.fb.group({
            name: ['', Validators.required],
            email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            address: ['', Validators.required],
        });
    }
  /**
   *
   * Regiter form funtion
   * @returns
   */
  onSubmit() {
      this.submitted = true;
      this.addFormRecord.markAllAsTouched();
          if(this.addFormRecord.invalid){
            return
          }
      this.dialogRef.close(this.addFormRecord.value);
    }

  /**
   * Update form function
   * @returns
   */
  updateUser():void{
      this.submitted = true;
      this.addFormRecord.markAllAsTouched();
          if(this.addFormRecord.invalid){
            return;
          }
          var data = {
            position: this.position,
            name: this.addFormRecord.value.name,
            email: this.addFormRecord.value.email,
            address: this.addFormRecord.value.address,
          }
      this.dialogRef.close(data);
  }


}
