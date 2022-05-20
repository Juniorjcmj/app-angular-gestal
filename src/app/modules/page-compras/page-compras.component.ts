import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ComprasService } from './compras.service';
import { Compra } from './model/compra';
import { FomCompraComponent } from './fom-compra/fom-compra.component';

@Component({
  selector: 'app-page-compras',
  templateUrl: './page-compras.component.html',
  styleUrls: ['./page-compras.component.css']
})
export class PageComprasComponent implements OnInit {

  triagem$: Observable<Compra[]>;
  cotacao$: Observable<Compra[]>;
  autoricacao$: Observable<Compra[]>;
  compra$: Observable<Compra[]>;

  displayedColumns: string[] = ['DESCRIÇÃO', 'DATA', 'VALOR', 'PRIORIDADE', 'DATACADASTRO', 'DATAATUALIZACAO'];

  constructor(public service: ComprasService, public dialog: MatDialog) {
    this.triagem$ = this.service.list("TRIAGEM")
   .pipe(
     catchError(erros => {
       this.onError(erros)
       console.log(erros)
           return of([])
     })
   )
   this.cotacao$ = this.service.list("COTAÇÃO")
   .pipe(
     catchError(erros => {
       this.onError(erros)
       console.log(erros)
           return of([])
     })
   )
   this.autoricacao$ = this.service.list("AUTORIZAÇÃO")
   .pipe(
     catchError(erros => {
       this.onError(erros)
       console.log(erros)
           return of([])
     })
   )
   this.compra$ = this.service.list("COMPRA")
   .pipe(
     catchError(erros => {
       this.onError(erros)
       console.log(erros)
           return of([])
     })
   )
   }

   onError(errorMsg : String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(FomCompraComponent, {
      width: '400px',
      data: {

      },
    });
  }

}
