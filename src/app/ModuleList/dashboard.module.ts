import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../Section/category/category.component';
import { ProductComponent } from '../Section/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ExampleServiceService } from '../Servicess/example-service.service';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ProductComponent,},
      { path: 'category', component: CategoryComponent,},
]
}

];


@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  providers: [ExampleServiceService],
  exports: [RouterModule,],

})
export class DashboardModule { }
