import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../Section/category/category.component';
import { ProductComponent } from '../Section/product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ExampleServiceService } from '../Servicess/example-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SigninComponent } from '../signin/signin.component';

const matFuntion = [
  FormsModule,
  // MatInputModule,MatFormFieldModule,
  // MatButtonModule,
  // MatToolbarModule,
  // MatIconModule,
  // MatMenuModule,MatDialogModule,
  // MatTabsModule,MatSelectModule,
  // MatListModule,MatCheckboxModule,
  // MatRadioModule,MatSlideToggleModule,
]



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
    SigninComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes),
    ReactiveFormsModule,HttpClientModule,
    FormsModule,
    // matFuntion
  ],
  providers: [ExampleServiceService],
  exports: [RouterModule],

})
export class DashboardModule { }
