import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { EntregaHomeComponent } from './entrega-home/entrega-home.component';


const routes: Routes = [
    {path: 'entrega', component: EntregaHomeComponent}   
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedicaoRoutingModule { }