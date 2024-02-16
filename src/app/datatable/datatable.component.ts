import { AddUserComponent } from './../add-user/add-user.component';
import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material/paginator';
import { PopupComponent } from '../popup/popup.component';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
})
export class DatatableComponent  implements OnInit{

  /** incriment of user record  */
    count:number = 1;
    /**
     * UserData array of defined type.
     * @params position:number,name: string, email:string, address:string
     */
    UserData: { position: number; name: string, email:string, address:string }[] = [];

    /**
     * ViewChild Directive for DataTable Search , pagination and sort
     */
    @ViewChild(MatSort ,{static:true}) sort!:MatSort;
    @ViewChild(MatPaginator, {static:true}) paginator!: MatPaginator;
    /**
     * Data to show in datatable
     * Displaycolumns is a string type of aaray with columns.
     * @params dataSource
     * @params displayedColumn: string[] = ['position', 'name', 'email', 'address', 'action'];
     */
    dataSource = new MatTableDataSource(this.UserData);
    displayedColumns: string[] = ['position', 'name', 'email', 'address', 'action'];

    /**
     * Constructor for dependency injections.
     * @param dialog
     * @param dialog1
     */
    constructor(public dialog: MatDialog, private dialog1:MatDialog) {}

    /**
     *  DialogRef for AddUserComponent
     * @return void
     */
    openDialog(): void {
        const dialogRef = this.dialog.open(AddUserComponent);
        dialogRef.afterClosed().subscribe((result:any[]) => {
            this.AddRecordDatatable(result);
        });
    }

    /**
     *
     * @param data
     * EditDialogRef to edit user.
     * @return void
     *
     */
    openEditDialog(data:number):void{
      const dialogRef1 = this.dialog.open(AddUserComponent,{
          data: {'userdata': data,'edit':true},});
      dialogRef1.afterClosed().subscribe((result:any[]) => {
          this.UpdateRecordDatatable(result);
      });
    }

    /**
     *
     * @param data
     * @return void
     */
    openDeleteDialog(data:number):void{
      const dialogRef2 = this.dialog1.open(PopupComponent,{
          data: {'id': data},
      });
      dialogRef2.afterClosed().subscribe((result:any) => {
          this.deletevalue(result);
      });
    }

    /**
     * count:number for incriment user data
     * UserData array to hold the submitted vallue
     * @param data:any
     * @return void
     */
    AddRecordDatatable(data:any):void{
        const mappedData = {
            position : this.count,
            name: data.name,
            email: data.email,
            address: data.address
        }
        this.count++;
        if(data){
            this.UserData.push(mappedData);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }
    }

    /**
     *
     * @param result
     * Edited value submitted on UserData array
     * @return void
     */
    UpdateRecordDatatable(result: any):void {
        const index = this.UserData.findIndex((user: any) => user.position === result.position);
        if (index >= 0) {
            this.UserData[index] = {
                ...this.UserData[index],
                name: result.name,
                email: result.email,
                address: result.address
            };
        } else {
            console.error("User with the specified position not found.");
        }
        this.dataSource = new MatTableDataSource(this.UserData);
    }
    /**
     * DataTable show on application instialization
     * @return void
     */
    ngOnInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    /**
     *
     * @param filterValue
     * Search functionality
     * @return void
     */
    applyFilter(filterValue: any):void{
        this.dataSource.filter = filterValue.value.trim().toLowerCase();
    }

    /**
     * SJDFSKLJ
     * @param data
     * Deleted functioanlity
     * @return void
     */
    deletevalue(data: number): void {
        if (data && this.UserData) {
            const index = this.UserData.findIndex((user: any) => user.position === data);
            if (index !== -1) {
                this.UserData.splice(index, 1);
            }
        }
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }

}
