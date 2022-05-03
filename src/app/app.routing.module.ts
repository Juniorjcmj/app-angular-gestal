import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './modules/home/home/home.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { AuthGuard } from './core/guards/auth.guard';
import { CartaoMovimentacaFormComponent } from './modules/conciliacao/cartao/cartao-movimentaca-form/cartao-movimentaca-form.component';
import { CartaoMovimentacaHeaderComponent } from './modules/conciliacao/cartao/cartao-movimentaca-header/cartao-movimentaca-header.component';
import { CartaoOperadoraHeaderComponent } from './modules/conciliacao/cartao/cartao-operadora-header/cartao-operadora-header.component';
import { EntregaHomeComponent } from './modules/expedicao/entrega-home/entrega-home.component';
import { UsuarioHomeComponent } from './modules/usuario/usuario-home/usuario-home.component';
import { VeiculoHeaderComponent } from './modules/veiculos/veiculo-header/veiculo-header.component';
import { VeiculoDespesaHeaderComponent } from './modules/veiculos/veiculo-despesa-header/veiculo-despesa-header.component';
import { ApagarListComponent } from './modules/apagar/apagar-list/apagar-list.component';

const routes: Routes =
 [
    {path: '',pathMatch:'full', redirectTo:'login' },
    {
      path: 'apagar-page',
      component: ApagarListComponent,
      canActivate: [AuthGuard]
    },
   
    
    {path: 'login', component: LoginFormComponent},
    {path: 'cartao', component: CartaoMovimentacaHeaderComponent},
    {path: 'cartao-form', component: CartaoMovimentacaFormComponent},
    {path: 'operadora', component: CartaoOperadoraHeaderComponent},
    {path: 'entrega', component: EntregaHomeComponent} ,
    {path: 'usuarios', component: UsuarioHomeComponent},
    {path: 'veiculo', component: VeiculoHeaderComponent},
    {path: 'veiculo-despesa', component: VeiculoDespesaHeaderComponent}       
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }