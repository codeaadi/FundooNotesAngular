import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatenoteComponent } from './notes/createnote/createnote.component';
import { GetallnotesComponent } from './notes/getallnotes/getallnotes.component';
const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'registration', component:RegisterComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,
  children: [
    {path:'',pathMatch:'full', redirectTo:'notes'},
    {path:'notes',component:GetallnotesComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
