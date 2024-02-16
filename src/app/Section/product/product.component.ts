import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { SigninComponent } from 'src/app/signin/signin.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    constructor(public dialog: MatDialog){}

    openDialog(): void {
      const dialogRef = this.dialog.open(SigninComponent);
    }



  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
