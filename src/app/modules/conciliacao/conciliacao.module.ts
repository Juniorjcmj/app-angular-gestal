import { NgModule } from '@angular/core';
import { CartaoOperadoraFormComponent } from './cartao/cartao-operadora-form/cartao-operadora-form.component';
import { CartaoMovimentacaFormComponent } from './cartao/cartao-movimentaca-form/cartao-movimentaca-form.component';
import { CartaoMovimentacaHeaderComponent } from './cartao/cartao-movimentaca-header/cartao-movimentaca-header.component';
import { CartaoMovimentacaListComponent } from './cartao/cartao-movimentaca-list/cartao-movimentaca-list.component';
import { CartaoOperadoraHeaderComponent } from './cartao/cartao-operadora-header/cartao-operadora-header.component';
import { CartaoOperadoraListComponent } from './cartao/cartao-operadora-list/cartao-operadora-list.component';




@NgModule({
  declarations: [
    CartaoOperadoraFormComponent,
    CartaoOperadoraListComponent,
    CartaoMovimentacaFormComponent,
    CartaoMovimentacaListComponent,
    CartaoMovimentacaHeaderComponent,
    CartaoOperadoraHeaderComponent 
  ],
  imports: [   
   
  ]
})
export class ConciliacaoModule { }
