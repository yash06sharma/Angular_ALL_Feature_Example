import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-form-array',
    templateUrl: './form-array.component.html',
    styleUrls: ['./form-array.component.css']
})

export class FormArrayComponent {
    /** @param skillsForm FormGroup */
    skillsForm: FormGroup;

    /** @param submitted boolean */
    submitted:boolean = false;

    /**
     * constructor of the formarray compoemt
     *
     * @param FormBuilder fb
     */
    constructor(private fb:FormBuilder) {
        this.skillsForm = this.fb.group ({
            name: ['', Validators.required],
            phone:['',[ Validators.required, Validators.pattern("[0-9 ]{10}")]],
            email:['',[Validators.required,Validators.email,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            addresses: new FormArray([]) ,
            registeration: new FormArray([]) ,
        });
    }

    /**
     *
     */
    get f() {
        return this.skillsForm.controls;
    }
    /**
     *
     */
    get registeration() {
      return (<FormArray>this.skillsForm.get("registeration")).controls;
    }

    /**
     * Registration form with formbuilder.
     */
    addReg() {
        const newRegSkillFormGroup = this.fb.group({
            name: ['', Validators.required],
            phone:['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
            email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
            regAddress: new FormArray([]) ,
        });
       (this.skillsForm.get('registeration') as FormArray).push(newRegSkillFormGroup);
    }

    /**
     *
     * @param index
     * @returns
     */
    getRegAddressControls(index: number) {
        return ((this.skillsForm.get('registeration') as FormArray)
        .at(index).get('regAddress') as FormArray).controls;
    }

    /**
     *
     * @param index
     */
    addRegistrationAddress(index: number) {
        const newRegAddSkillFormGroup = this.fb.group({
            state: ['', Validators.required],
            city: ['', Validators.required],
            zip: ['', Validators.required],
        });
        ((this.skillsForm.get('registeration') as FormArray)
        .at(index).get('regAddress') as FormArray).push(newRegAddSkillFormGroup);
    }

    /**
     *
     * @param index
     * @param value
     */
    removeRegSkillAddress(index:number,value:number){
        ((this.skillsForm.get('registeration') as FormArray).at(index)
        .get('regAddress') as FormArray).removeAt(value);
    }

  /**
   *
   * @param i
   */
  removeRegSkill(i:number) {
      (<FormArray>this.skillsForm.get("registeration")).removeAt(i);
  }

  /**
   *
   */
  get addresses() {
      return (<FormArray>this.skillsForm.get("addresses"));
  }



  /**
   * create a add skill form value.
   */
  addSkill() {
      const newSkillFormGroup = this.fb.group({
          state: ['', Validators.required],
          city: ['', Validators.required],
          zip: ['', Validators.required],
      });
      (this.skillsForm.get('addresses') as FormArray).push(newSkillFormGroup);
  }

  /**
   *
   * @param i
   */
  removeSkill(i:number) {
      (<FormArray>this.skillsForm.get("addresses")).removeAt(i);
  }

  /**
   * submit value function
   * @returns
   */
  onSubmit() {
      this.submitted = true;
      if(this.skillsForm.invalid){
        this.skillsForm.markAllAsTouched();
        console.log(this.skillsForm.invalid);
        return;
      }
      console.log(this.skillsForm.value);
      this.skillsForm.reset();
        this.skillsForm.controls['name'].setErrors(null);
        this.skillsForm.controls['phone'].setErrors(null);
        this.skillsForm.controls['email'].setErrors(null);

  }
}
