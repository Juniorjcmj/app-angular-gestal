import { NgModule } from '@angular/core';
import { ApagarFormComponent } from './apagar-form/apagar-form.component';
import { ApagarListComponent } from './apagar-list/apagar-list.component';
import { ApagarHeaderComponent } from './apagar-header/apagar-header.component';
import { PageApagarComponent } from './page-apagar/page-apagar.component';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ApagarFormComponent, ApagarListComponent, ApagarHeaderComponent,PageApagarComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule


  ],
  exports:[],
  providers:[[{provider: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }]]
})
export class ApagarModule { }
