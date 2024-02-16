import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DatatableComponent } from './datatable/datatable.component';
import { MultipopetiondropdownComponent } from './multipopetiondropdown/multipopetiondropdown.component';
import { SelectboxComponent } from './selectbox/selectbox.component';
import { MultistepformComponent } from './multistepform/multistepform.component';
import { MultipleFileComponent } from './multiple-file/multiple-file.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ImagecropComponent } from './imagecrop/imagecrop.component';
import { MultipleDragDropComponent } from './multiple-drag-drop/multiple-drag-drop.component';
import { NestedformComponent } from './nestedform/nestedform.component';
import { ObservableComponent } from './observable/observable.component';
import { CustumFilterComponent } from './custum-filter/custum-filter.component';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./ModuleList/dashboard.module').then(m => m.DashboardModule)
  },
  // {
  //   path:'login', component: LoginComponent
  // },
  {
    path: 'adduser', component: FormArrayComponent
  },
  {
    path: 'datatable', component: DatatableComponent
  },
  {
    path: 'dropdown', component: MultipopetiondropdownComponent
  },
  {
    path: 'select', component: SelectboxComponent
  },
  {
    path: 'multitep', component: MultistepformComponent
  },
  {
    path: 'multifile', component: MultipleFileComponent
  },
  {
    path: 'dragdrop', component: DragDropComponent
  },
  {
    path: 'imagecrop', component: ImagecropComponent
  },
  {
    path: 'multipledragdrop', component: MultipleDragDropComponent
  },
  {
    path: 'nestedform', component: NestedformComponent
  },
  {
    path: 'observable', component: ObservableComponent
  },
  {
    path: 'custumfilter', component: CustumFilterComponent
  }


];

@NgModule({
  declarations: [
    LoginComponent,
    // SigninComponent,

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
