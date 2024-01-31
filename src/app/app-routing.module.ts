import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./ModuleList/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path: 'signIn', component: SigninComponent
  }

];

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,

  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
