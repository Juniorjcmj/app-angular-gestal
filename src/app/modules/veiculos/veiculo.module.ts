import { NgModule } from '@angular/core';

import { VeiculoFormComponent } from './veiculo-form/veiculo-form.component';
import { VeiculoListComponent } from './veiculo-list/veiculo-list.component';
import { VeiculoHeaderComponent } from './veiculo-header/veiculo-header.component';
import { VeiculoDespesaFormComponent } from './veiculo-despesa-form/veiculo-despesa-form.component';
import { VeiculoDespesaListComponent } from './veiculo-despesa-list/veiculo-despesa-list.component';
import { VeiculoDespesaHeaderComponent } from './veiculo-despesa-header/veiculo-despesa-header.component';
import { VeiculoRoutingModule } from './veiculo.routing.module';



@NgModule({
  declarations: [
    VeiculoFormComponent,
    VeiculoListComponent,
    VeiculoHeaderComponent,
    VeiculoDespesaFormComponent,
    VeiculoDespesaListComponent,
    VeiculoDespesaHeaderComponent
  ],
  imports: [
    
  ]
})
export class VeiculoModule { }
