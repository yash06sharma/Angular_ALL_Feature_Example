import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SigninUserComponent } from './signin-user/signin-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { FormArrayComponent } from './form-array/form-array.component';
import { DataTableService } from './Services/data-table.service';
import { DatatableComponent } from './datatable/datatable.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DialogModule } from '@angular/cdk/dialog';
import { PopupComponent } from './popup/popup.component';
import { MultipopetiondropdownComponent } from './multipopetiondropdown/multipopetiondropdown.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { SelectionComponent } from './selection/selection.component';
import { MultistepformComponent } from './multistepform/multistepform.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MultipleFileComponent } from './multiple-file/multiple-file.component';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ImagecropComponent } from './imagecrop/imagecrop.component';
import { CropperDialogComponent } from './cropper-dialog/cropper-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MultipleDragDropComponent } from './multiple-drag-drop/multiple-drag-drop.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { ObservableComponent } from './observable/observable.component';
import { CustumFilterComponent } from './custum-filter/custum-filter.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninUserComponent,
    LoginUserComponent,
    FormArrayComponent,
    DatatableComponent,
    AddUserComponent,
    PopupComponent,
    MultipopetiondropdownComponent,
    SelectboxComponent,
    SelectionComponent,
    MultistepformComponent,
    MultipleFileComponent,
    DragDropComponent,
    ImagecropComponent,
    CropperDialogComponent,
    MultipleDragDropComponent,
    NestedformComponent,
    ObservableComponent,
    CustumFilterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,HttpClientModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule,
    DialogModule,
    MatStepperModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    CdkDrag,
    DragDropModule,
    MatProgressSpinnerModule,
    ImageCropperModule,





  ],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
