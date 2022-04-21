import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApagarHeaderComponent } from './apagar-header/apagar-header.component';
import { ApagarFormComponent } from './apagar-form/apagar-form.component';

const routes: Routes = [
    {path: 'apagar', component: ApagarHeaderComponent},
    {path: 'apagar-form', component: ApagarFormComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApagarRoutingModule { }