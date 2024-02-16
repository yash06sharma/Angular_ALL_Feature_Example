import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExampleServiceService } from '../Servicess/example-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm!:FormGroup;
  submitted:boolean = false;
  constructor(private fb:FormBuilder,private db:ExampleServiceService) { }

  ngOnInit(): void {

    this.userloginForm();  }

    userloginForm(){
      this.loginForm = this.fb.group({
        email:['',[Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        password:['',[Validators.required]],
      })
    }

    get login(){
      return this.loginForm.controls;
    }

    loginUserRecord(){
      this.submitted = true;
      this.loginForm.markAllAsTouched();

      if(this.loginForm.invalid){
        return;
      }
      //-----------Login With Token-----------
      this.db.login_Post_API(this.loginForm.value).subscribe((res:any)=>{
        console.log(res);
        const { Token, credentials } = res;

        localStorage.setItem('Token', Token);
        localStorage.setItem('Auth', JSON.stringify(credentials));

        // ---------------get Authentication from local----------------

         console.log(localStorage.getItem('Token'));
         const storedCredentials = JSON.parse(localStorage.getItem('Auth') || '{}');
         console.log(storedCredentials.id);
         console.log(storedCredentials.name);

      })
      console.log(this.loginForm.value);
      this.loginForm.reset();
    }



}
