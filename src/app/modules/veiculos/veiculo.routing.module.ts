import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { VeiculoHeaderComponent } from './veiculo-header/veiculo-header.component';
import { VeiculoDespesaHeaderComponent } from './veiculo-despesa-header/veiculo-despesa-header.component';



const routes: Routes = [
    {path: 'veiculo', component: VeiculoHeaderComponent},
    {path: 'veiculo-despesa', component: VeiculoDespesaHeaderComponent}      

    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculoRoutingModule { }