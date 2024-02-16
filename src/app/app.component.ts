import { Component,TemplateRef, OnInit, OnDestroy,ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SigninUserComponent } from './signin-user/signin-user.component';
import { LoginUserComponent } from './login-user/login-user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Project-A15';
  constructor(public dialog: MatDialog){

    }


  ngOnInit() {

  }
    openDialog(){

      const dialogRefSignIn = this.dialog.open(SigninUserComponent, { height: '400px', width: '600px', });
    }

    openDialogLogin(){
      const dialogRefLogin = this.dialog.open(LoginUserComponent, { height: '300px', width: '600px', });

    }


   //-----------_FOrm Array-------------

}


