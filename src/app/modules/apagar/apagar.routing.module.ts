import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { PageApagarComponent } from './page-apagar/page-apagar.component';

const routes: Routes = [
    {path: 'apagar', component: PageApagarComponent},
   
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApagarRoutingModule { }