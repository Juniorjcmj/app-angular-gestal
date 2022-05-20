import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComprasService } from '../compras.service';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Prioridade {
   value: string
}
interface Status {
  value: string
}


@Component({
  selector: 'app-fom-compra',
  templateUrl: './fom-compra.component.html',
  styleUrls: ['./fom-compra.component.css']
})
export class FomCompraComponent implements OnInit {
  form: FormGroup;

  prioridades: Prioridade[] = [{value: 'ALTA'},{value: 'MÉDIA'}, {value: 'BAIXA'} ]
  status: Status[] = [{value: 'TRIAGEM'},{value: 'COTAÇÃO'}, {value: 'APROVAÇÃO'} , {value: 'COMPRA'}, {value: 'ENTREGA PARCIAL'}, {value: 'ENTREGA TOTAL'}, {value: 'CANCELADA'}]

  constructor(private formBuilder: FormBuilder,public service: ComprasService, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({

      id:[null],
      data:[null],
      valorTotal: [null],
      descricao:[null],
      status:[null],
      prioridade:[null]

   })}

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log("resposta" + result),
      error => {
        this.snackBar.open("Erro ao Salvar Despesa", '',{duration: 5000});
      });
  }
  onCancel(){
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

}
