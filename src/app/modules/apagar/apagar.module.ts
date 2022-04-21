import { NgModule } from '@angular/core';
import { ApagarFormComponent } from './apagar-form/apagar-form.component';
import { ApagarListComponent } from './apagar-list/apagar-list.component';
import { ApagarHeaderComponent } from './apagar-header/apagar-header.component';
import { ApagarRoutingModule } from './apagar.routing.module';


@NgModule({
  declarations: [ApagarFormComponent, ApagarListComponent, ApagarHeaderComponent],
  imports: [
    ApagarRoutingModule
  ],
  exports:[],
  providers:[]
})
export class ApagarModule { }
