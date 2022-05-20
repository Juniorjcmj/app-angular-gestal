import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { PageComprasComponent } from './page-compras.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FomCompraComponent } from './fom-compra/fom-compra.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';



@NgModule({
  declarations: [PageComprasComponent,FomCompraComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers:[[{provider: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true }]]
})
export class ComprasModule { }
