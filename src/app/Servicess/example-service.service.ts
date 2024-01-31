import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {

  constructor() { }
moduleData:any[] = [];

get_Table_Data(data:any){
  this.moduleData.push(...data);
}

show_Table_Data():Observable<any>{
  return of(this.moduleData);
}


}
