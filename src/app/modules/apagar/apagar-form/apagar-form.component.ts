import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Empresa } from '../model/empresa';
import { ApagarService } from '../apagar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-apagar-form',
  templateUrl: './apagar-form.component.html',
  styleUrls: ['./apagar-form.component.css']
})
export class ApagarFormComponent implements OnInit {

  form: FormGroup;

 

  constructor(private formBuilder: FormBuilder, private service: ApagarService, private snackBar: MatSnackBar) { 
    this.form = this.formBuilder.group({
    
    dataVencimento: [null],
    dataPagamento: [null],
    valorDuplicata: [null],
    jurosMulta: [null],
    valorPago: [null],
    desconto: [null],
    fornecedor: [null],
    nd: [null],
    parcela: [null],
    localPagamento: [null],
    formaPagamento: [null],
    tipoDespesa: [null],
    classificacao: [null],
    subClassificacao: [null],
    situacao: [null],
    observacao: [null],  
    numeroParcelas: [null],
    empresa:[null]

    });
  }

  ngOnInit(): void {}

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => console.log(result),
      error => {
        this.onError();
      })
    ;
    console.log(this.form.value);
  }

  onCancel(){

  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  private onError(){
    this.snackBar.open("Erro ao Salvar Despesa", '',{duration: 5000});
  }

}
