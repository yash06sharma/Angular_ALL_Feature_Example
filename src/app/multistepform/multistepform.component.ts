import { Component, OnInit,ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-multistepform',
  templateUrl: './multistepform.component.html',
  styleUrls: ['./multistepform.component.css']
})
export class MultistepformComponent implements OnInit {

    /** isLimnear */
    isLinear = true;

    /**firstFormGroup!: FormGroup; */
    firstFormGroup!: FormGroup;

    /**secondFormGroup!: FormGroup; */
    secondFormGroup!: FormGroup;
    /** @param submitted boolean */

    submitted:boolean = false;
    /**stepper!:MatStepper */

    @ViewChild('stepper') stepper!: MatStepper;

    /**
     * Dependency Injection
     * @param _formBuilder
     */
    constructor(private _formBuilder: FormBuilder) {}

    /**
     * sdfjfksdf
     *
     * @return void
     */
    ngOnInit(): void {
        this.registrationForm();
    }

    /**Form Control */
    get ff() {
        return this.firstFormGroup.controls;
    }

    /**Form Control */
    get sf() {
        return this.secondFormGroup.controls;
    }

    /**
     * multiple registration form function
     * @return void
     */
    registrationForm():void{
        this.firstFormGroup = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        });
        this.secondFormGroup = this._formBuilder.group({
            mobile: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
            address: ['', Validators.required],
        });
    }

    /**
     * Form submition of firstFormGroup & secondFormGroup
     * @returns
     */
    submit() {
        this.submitted = true;
            if(this.firstFormGroup.invalid){
                this.firstFormGroup.markAllAsTouched();
                console.log(this.firstFormGroup.invalid);
                return;
            }else if(this.secondFormGroup.invalid){
                this.secondFormGroup.markAllAsTouched();
                console.log(this.secondFormGroup.invalid);
                return;
            }

        console.log(this.firstFormGroup.value);
        console.log(this.secondFormGroup.value);
        this.stepper.reset();
        this.stepper.selectedIndex = 0;
        this.firstFormGroup.reset();
    }
      // this.markFormGroupTouched(this.firstFormGroup);
    // markFormGroupTouched(formGroup: FormGroup) {
    //   formGroup.reset();
    //   Object.values(formGroup.controls).forEach(control => {
    //     control.markAsUntouched();
    //     // control.clearValidators();
    //     // control.updateValueAndValidity();
    //     if (control instanceof FormGroup) {
    //       this.markFormGroupTouched(control);
    //     }
    //   });
    // }

    /**
     * check FirstFormGroup
     * @returns
     */
    chcekError(){
        this.submitted = true;
        if(this.firstFormGroup.invalid){
            this.firstFormGroup.markAllAsTouched();
            console.log(this.firstFormGroup.invalid);
            return;
        }

    }
      /**
     * check SecondFormGroup
     * @returns
     */
    chcekErrorSencondForm(){
        this.submitted = true;
        if(this.secondFormGroup.invalid){
            this.secondFormGroup.markAllAsTouched();
            console.log(this.secondFormGroup.invalid);
            return;
        }
    }
}
