import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTableService {
  data = new Observable(observer=>{
    setTimeout(() => {
      observer.next('1st Next Method');
      observer.next('2nd Next Method');
      observer.complete();
    }, 2000);

    return {

      unsubscribe() {

        console.log('Method Unsubscribe');

      }

    };

  });


  // data = new Observable<any>(observer => {
  //   // observer.next("HY Brother")
  //  });


  constructor(private _http:HttpClient) {
    // this.data.subscribe(data=>{
    //   data.next("HY Brother")
    // });
  }

  showDataTable(data:any){
    return this._http.get('http://127.0.0.1:8000/api/userdata',data);
  }
}
