import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleServiceService {
  SERVER_URL: string = "https://file.io";
  constructor(private http:HttpClient) { }

moduleData:any[] = [];

get_Table_Data(data:any):Observable<any>{
  this.moduleData.push(data);
  return of('Data Added Successfully');

}

show_Table_Data():Observable<any>{
  return of(this.moduleData);
}

registration_Post_API(data:any){
  console.log(data);
  return this.http.post('http://127.0.0.1:8000/api/register/',data)
}

login_Post_API(data:any){
  console.log("Login Data go by services",data);
  return this.http.post('http://127.0.0.1:8000/api/login/',data)
}
public upload(formData:any) {
    console.log(formData.get('file'));
    return this.http.post<any>(this.SERVER_URL, formData, {
    reportProgress: true,
    observe: 'events'
});

}


}


