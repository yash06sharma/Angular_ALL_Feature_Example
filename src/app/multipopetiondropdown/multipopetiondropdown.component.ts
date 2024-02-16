import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multipopetiondropdown',
  templateUrl: './multipopetiondropdown.component.html',
  styleUrls: ['./multipopetiondropdown.component.css']
})
export class MultipopetiondropdownComponent implements OnInit {
  /**@position:number
   * to store data with this id
   */
    position:number = 0;
    /**
     * @MultiDrom!: FormGroup
     * Form instance
     */
    multiDrop!: FormGroup;
    /**
     * submitted:boolen
     * check the value submitted is true or false..
     */
    submitted:boolean= false;
    /**
     * data:any
     */
    data:any;
    /**
     * displayedColumn: string[] = ['position', 'name', 'hobbies'];
     * show column name in table
     */
    displayedColumns: string[] = ['position', 'name', 'hobbies'];
    /**
     * dataSource:any
     * data comes in this variable to display on table
     */
    // dataSource:any[];
    dataSource: { position: number; name: string, hobbies:string}[] = [];

    /**
     * formControl instace of multiselect box
     */
    toppings = new FormControl();
    /**
     * value of select box options.
     * toppingList = ['Chess', 'Cricket', 'Running', 'Dance', 'Workout', 'Study'];
     */
    toppingList = ['Chess', 'Cricket', 'Running', 'Dance', 'Workout', 'Study'];
    /**
     *     selectedToppings: any;
     */
    selectedToppings: any;
    /**
     *  count:number=1;
     */
    count:number=1;
        /**
      * editButton:any
      * addButton:any
      *  To hide and display button
      */
        editButton:any = 'none';
        addButton:any = 'block';

    /**
     * To inject the dependencies
     * @param fb
     */
    constructor(private fb:FormBuilder){}

    /**
     * To initialize the data
     */
    ngOnInit(): void {
        this.multiDrop =   this.fb.group({
            name:['',Validators.required],
            hobbies:['', Validators.required]
          });
    }

    /**
     * Form constrol instance.
     */
    get f() {
        return this.multiDrop.controls;
   }

   /**
    * onForm submit function.
    * @return void
    */
    onsumit():void{
        this.submitted = true;
          if(this.multiDrop.invalid){
              this.multiDrop.markAllAsTouched();
              return;
          }
          if(this.multiDrop.value){
              this.data = {
                  'position': this.count,
                  'name': this.multiDrop.value.name,
                  'hobbies':this.multiDrop.value.hobbies.toString()
              }
          }
          this.count++;
              if(this.data){
                  this.dataSource.push(this.data);
              }
          this.multiDrop.reset();
          this.multiDrop.controls['name'].setErrors(null);
          this.multiDrop.controls['hobbies'].setErrors(null);
  }

     /**
      * @param data:any
    * onForm submit function.
    * @return void
    */
    editTableValue(data:any): void{
        var separatedArray = data.hobbies.split(', ');
        console.log(separatedArray);
        separatedArray = [];
        let previousIndex = 0;
            for (var i = 0; i < data.hobbies.length; i++) {
                if (data.hobbies[i] == ",") {
                    let separated = data.hobbies.slice(previousIndex, i);
                    separatedArray.push(separated);
                    previousIndex = i + 1;
                }
            }
        separatedArray.push(data.hobbies.slice(previousIndex, i));
        if(data !== null){
            this.position = this.data.position;
            this.multiDrop.controls['name'].setValue(data.name);
            this.multiDrop.controls['hobbies'].setValue(separatedArray);
        }
        if(data){
            this.editButton = 'block';
            this.addButton = 'none';
        }
    }

    /**
     *
     * @returns void
     */
    updateTableValue():void{
        this.submitted = true;
            if(this.multiDrop.invalid){
                this.multiDrop.markAllAsTouched();
                return;
                }
            this.data = {
                'position': this.position,
                'name': this.multiDrop.value.name,
                'hobbies':this.multiDrop.value.hobbies.toString()
            }
            this.updateRecord(this.data)
    }
    /**
     *
     * @param data
     * @return void
     */
    updateRecord(data:any):void{
        const index = this.dataSource.findIndex((user: any) => user.position === data.position);
            if (index >= 0) {
                this.dataSource[index] = {
                    ...this.dataSource[index],
                    name: data.name,
                    hobbies: data.hobbies,
                };
            } else {
                console.error("User with the specified position not found.");
            }
            if(data){
                this.editButton = 'none';
                this.addButton = 'block';
            }
    }

    /**
     *
     * @param data
     * @return void
     */
    deletevalue(data: number): void {
        if (data && this.dataSource) {
            const index = this.dataSource.findIndex((user: any) => user.position === data);
                if (index !== -1) {
                    this.dataSource.splice(index, 1);
                }
        }
  }

}

