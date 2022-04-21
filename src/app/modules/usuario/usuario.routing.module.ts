import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { UsuarioHomeComponent } from './usuario-home/usuario-home.component';



const routes: Routes = [
    {path: 'usuarios', component: UsuarioHomeComponent}   
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }