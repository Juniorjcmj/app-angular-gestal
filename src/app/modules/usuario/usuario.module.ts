import { NgModule } from '@angular/core';

import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';
import { UsuarioRoutingModule } from './usuario.routing.module';



@NgModule({
  declarations: [
    UsuarioFormComponent,
    UsuarioListComponent,
    UsuarioHomeComponent
  ],
  imports: [
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
