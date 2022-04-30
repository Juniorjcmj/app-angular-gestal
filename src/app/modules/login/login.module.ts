import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  {path: 'login', component: LoginFormComponent}, 
  
]; //



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
     SharedModule,
     MatFormFieldModule,
     MatInputModule,
     FormsModule
  ]
})
export class LoginModule { }
