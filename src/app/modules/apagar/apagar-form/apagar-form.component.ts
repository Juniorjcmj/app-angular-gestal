import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Empresa } from '../model/empresa';
import { ApagarService } from '../apagar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-apagar-form',
  templateUrl: './apagar-form.component.html',
  styleUrls: ['./apagar-form.component.css']
})
export class ApagarFormComponent implements OnInit {

  form: FormGroup;
  empresas: Empresa[] =[]



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
    empresaId:[null]

    });

    this.service.listEmpresa()
    .subscribe(
      (response:any) =>{
       this.empresas = response;
      }, error =>{
            //error
            console.log(error);
          }
    )
  }

  ngOnInit(): void {}

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

  findAllEmpresas(){
    return this.service.listEmpresa();
  }

}
