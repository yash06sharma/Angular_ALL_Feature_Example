import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css']
})
export class SelectboxComponent implements OnInit{
    /**
     * cityshow:boolean
     * to show and hide the state selectbox
     */
    cityshow:boolean = false;
    /**
     * zipshow:boolean
     * to show and hide the Zipcode selectbox
     */
    zipshow:boolean = false;
    /** City:string[] */
    public City:string[]= [];
    /** Zip:string[] */
    public Zip:string[] = [];
    /** India:string[] */
    public India: string[] = ['Ujjain', 'Indore', 'Dewas', 'Ratlam'];
      /** China:string[] */
    public China: string[] = ['Beijing', 'Shanghai', 'Tianjin', 'Guangzhou'];
      /** Rusia:string[] */
    public Rusia: string[] = ['Moscow', 'Penza', 'Arkhangelsk', 'Magadan'];
 /** result:any[] */
    result:any[] = [];
      /** Rusia:string[] */
    public PinCode: { [key: string]: string } = {
      'Ujjain': '456001',
      'Indore': '451010',
      'Dewas': '124584',
      'Ratlam': '326547',
      'Beijing': '457842',
      'Shanghai': '021458',
      'Tianjin': '746325',
      'Guangzhou': '452178',
      'Moscow': '754123',
      'Penza': '326598',
      'Arkhangelsk': '201457',
      'Magadan': '289740',
    };
    /**
     * Dependency Injection
     */
    constructor(){}
    /**
     * to insitialization
     * @return void
     */
    ngOnInit(): void {
      // throw new Error('Method not implemented.');
    }
    /**
     *
     * @param Data
     * @return void
     */
    selectCountry(Data:any){
      console.log(Data.value);
      this.cityshow = true;
          if(Data.value == 'India'){
              this.City = this.India;
          }else if(Data.value == 'China'){
              this.City = this.China;
          }else{
              this.City = this.Rusia;
          }
    }
    /**
     *
     * @param Data
     * @return void
     */
    selectState(Data: any):void {
        this.zipshow = true;
        console.log(Data.value);
        this.result = Object.entries(this.PinCode).filter(([city]) => city.includes(Data.value));
        this.Zip = this.result[0][1];
    }
    /**
     *
     * @param data
     * @return void
     */
    selectZip(data:any):void{
        console.log(data.value)
    }





}
