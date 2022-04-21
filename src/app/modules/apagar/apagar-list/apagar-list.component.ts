import { Component, OnInit } from '@angular/core';
import { ContasPagar } from '../model/contas-pagar';
import { ApagarService } from '../apagar.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';



@Component({
  selector: 'app-apagar-list',
  templateUrl: './apagar-list.component.html',
  styleUrls: ['./apagar-list.component.css']
})
export class ApagarListComponent implements OnInit {

  contasApagar$: Observable<ContasPagar[]>;

 displayedColumns: string[] = ['Empresa', 'Vencimento', 'Valor', 'Fornecedor'];
 
 
 
 constructor(protected apagarService: ApagarService, public dialog: MatDialog ) {
   this.contasApagar$ = this.apagarService.list()
   .pipe(
     catchError(erros => {
       this.onError("Erro ao Carregar!")
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

}
