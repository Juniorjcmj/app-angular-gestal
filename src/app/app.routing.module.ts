import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './modules/home/home/home.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';

const routes: Routes =
 [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginFormComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }