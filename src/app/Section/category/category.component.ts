  import { Component, OnInit } from '@angular/core';
  import { ExampleServiceService } from 'src/app/Servicess/example-service.service';

  @Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
  })
  export class CategoryComponent implements OnInit {

  constructor(private db:ExampleServiceService){

  }

  app_Storage_Data:any[] = [
    {id:1, role:101, name:'Yash'},
    {id:2, role:102, name:'Suresh'},
    {id:3, role:103, name:'Ankit'},
    {id:4, role:104, name:'Jyoti'},
    {id:5, role:105, name:'Snehil'},
    {id:6, role:106, name:'Bhushan'},
    {id:7, role:107, name:'Diptesh'},
    {id:8, role:108, name:'Amish'},
    {id:9, role:109, name:'Mamta'},
    {id:10, role:110, name:'Neha'},
  ];

    ngOnInit(): void {

    }

    get_ID_DATA(ID:number){

        const dataForID = this.app_Storage_Data.filter(item => item.id === ID);
        this.db.get_Table_Data(dataForID);
        this.db.show_Table_Data().subscribe((res: any[]) => {
          console.log(res);
        });
    }

  }
