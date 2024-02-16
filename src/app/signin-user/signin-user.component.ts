import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExampleServiceService } from '../Servicess/example-service.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css']
})
export class SigninUserComponent implements OnInit {

  constructor(private fb:FormBuilder,private db:ExampleServiceService ) { }
RegistrationForm!:FormGroup;
submitted:boolean = false;

  ngOnInit(): void {
    this.registerForm();
  }

  registerForm(){
    this.RegistrationForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required]],
    });
  }

  get f(){
    return this.RegistrationForm.controls;
  }

  addUserRecord(){
    this.submitted = true;
    this.RegistrationForm.markAllAsTouched();

    if(this.RegistrationForm.invalid){
      return;
    }
    this.db.registration_Post_API(this.RegistrationForm.value).subscribe((res)=>{
      console.log(res);
      console.log("Data Submitted");
    })
    console.log(this.RegistrationForm.value);
    this.RegistrationForm.reset();

  }


}
