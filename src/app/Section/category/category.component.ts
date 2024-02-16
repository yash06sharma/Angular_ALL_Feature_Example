import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ExampleServiceService } from 'src/app/Servicess/example-service.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
  export class CategoryComponent implements OnInit {
    public add_User!: FormGroup;

    constructor(private db:ExampleServiceService, private fb:FormBuilder){

    }
  editFunction:boolean=false;
  edited_ID:number=0;
  edited_Index:number=0;
  submitted:boolean = false;
  app_Storage_Data: { id: number; name: string; role: number }[] = [
    // {id:1, role:101, name:'Yash'},
  ];

    ngOnInit(): void {
      this.form_Array_Function();
    }

    form_Array_Function(){
      this.add_User =  this.fb.group({
        name:['',[Validators.required]],
        role:['',[Validators.required]],
      });
    }

    count:number = 1;
    get f(){
      return this.add_User.controls;
    }

      Add_DATA_Function(){
        this.add_User.markAllAsTouched();
        this.submitted = true;
        if(this.add_User.invalid){
          return;
        }

          if(this.editFunction){
            console.log("Edit WOrk");
            var check = {
              id: this.edited_ID,
              name:this.add_User.value.name,
              role:this.add_User.value.role,
            }


            if (this.edited_Index !== -1) {
              this.db.moduleData.splice(this.edited_Index, 1, check);
              this.add_User.reset();
              this.show_DATA();
            }

          }else{
                    var data = {
                      id:this.count,
                      name:this.add_User.value.name,
                      role:this.add_User.value.role,
                    }

                    this.count++;
                    this.db.get_Table_Data(data).subscribe((res)=>{
                      // console.log(res);
                    })
                    // console.log(data);
                  this.show_DATA();

                  this.add_User.reset();
          }
      this.editFunction= false;
    }

    show_DATA(){
      this.db.show_Table_Data().subscribe((res)=>{
        // console.log("DATA from Service");
        // console.log(res);
        this.app_Storage_Data = res;
      });
    }


    get_ID_DATA(ID:number){
        // console.log(ID);
        let data = this.db.moduleData.find(user => user.id === ID);

        if (data) {
          const index = this.db.moduleData.findIndex(x => x.id === data.id);
          console.log(index);
          this.edited_Index = index;
        }
          this.EditData(data);



    }

    EditData(data:any){
      this.edited_ID = data.id;
      this.add_User.controls['name'].setValue(data.name);
      this.add_User.controls['role'].setValue(data.role);
        this.editFunction = true;

    }


    Delete_ID_DATA(ID:number){
      console.log(ID);
      let data = this.db.moduleData.find(user=> user.id = ID);
      this.db.moduleData.splice(data,1);
      this.show_DATA();
      // console.log(data);
    }

  }
