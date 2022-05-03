import { Component, Inject, OnInit } from '@angular/core';
import { ContasPagar } from '../model/contas-pagar';
import { ApagarService } from '../apagar.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ApagarFormComponent } from '../apagar-form/apagar-form.component';

@Component({
  selector: 'app-apagar-list',
  templateUrl: './apagar-list.component.html',
  styleUrls: ['./apagar-list.component.css']
})
export class ApagarListComponent implements OnInit {

  contasApagar$: Observable<ContasPagar[]>;

 displayedColumns: string[] = ['EMPRESA', 'VENCIMENTO', 'VALOR', 'FORNECEDOR','DATA PG', 'SITUACAO','N/D', 'PARCELA', 'TIPO'];
 
 
 
 constructor(protected apagarService: ApagarService, public dialog: MatDialog ) {
   this.contasApagar$ = this.apagarService.list()
   .pipe(
     catchError(erros => {
       this.onError(erros)
       console.log(erros)
           return of([])
     })
   )
   // this.contasApagar = [];
  }
  onError(errorMsg : String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
  
  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ApagarFormComponent, {
      data: {
       
      },
    });
  }

}
