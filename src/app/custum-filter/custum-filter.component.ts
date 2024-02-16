import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custum-filter',
  templateUrl: './custum-filter.component.html',
  styleUrls: ['./custum-filter.component.css']
})
export class CustumFilterComponent implements OnInit {
    userData:{id:number,name:string,email:string,address:string}[] = [];
    userRecord:{id:number,name:string,email:string,address:string}[] = [
        {id:1, name:'yash',email:'06yashsharma@gmail.com',address:'ujm'},
        {id:1, name:'safal',email:'safal@gmail.com',address:'ujm'},
        {id:1, name:'trisha',email:'trisha@gmail.com',address:'ujm'},
        {id:1, name:'Jayant',email:'jayant@gmail.com',address:'ujm'},
    ];

    /**Dependency Injection */
    constructor(){}

    /**Intialization */
    ngOnInit(): void {
      this.getUserData();
    }

    /*
    *get data form Array
    @return void */
    getUserData():void{
      this.userData = this.userRecord;
    }

    /**
     *
     * @param data
     * @return void
     */
    filterUser(data: any):void {
        let aquaticCreatures: string | any[] = [];
        if (data && data.value) {
            aquaticCreatures = this.userRecord.filter(function(creature) {
                // return creature.name == data.value;
              return creature.name.includes(data.value)
            });
        }
        if (aquaticCreatures.length > 0) {
            console.log(aquaticCreatures);
            this.userData = aquaticCreatures;
        }else{
          this.getUserData();
        }
    }

}
