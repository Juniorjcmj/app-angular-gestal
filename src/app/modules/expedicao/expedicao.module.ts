import { NgModule } from '@angular/core';

import { EntregaFormComponent } from './entrega-form/entrega-form.component';
import { EntregaListComponent } from './entrega-list/entrega-list.component';
import { EntregaHomeComponent } from './entrega-home/entrega-home.component';
import { ExpedicaoRoutingModule } from './expedicao.routing.module';



@NgModule({
  declarations: [
    EntregaFormComponent,
    EntregaListComponent,
    EntregaHomeComponent
  ],
  imports: [
    
  ]
})
export class ExpedicaoModule { }
