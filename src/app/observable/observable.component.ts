import { Component, OnInit } from '@angular/core';
import { DataTableService } from '../Services/data-table.service';
import { error } from 'jquery';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor(private db:DataTableService){
      const test = this.db.data.subscribe({
        next(value){
          console.log("Next value",value)
        }
      //   next: value => console.log("Next value",value),
      //   error: error => console.log("Next value",error),
      //   complete: () => console.log("Code Working complete"),
      });

      setTimeout(() => {
        test.unsubscribe();
      }, 5000);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
    // this.db.data.next("data");
  }



}
