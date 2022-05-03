import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CartaoMovimentacaHeaderComponent } from './cartao/cartao-movimentaca-header/cartao-movimentaca-header.component';
import { CartaoOperadoraHeaderComponent } from './cartao/cartao-operadora-header/cartao-operadora-header.component';
import { CartaoMovimentacaFormComponent } from './cartao/cartao-movimentaca-form/cartao-movimentaca-form.component';


const routes: Routes = [
   
    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConciliacaoRoutingModule { }