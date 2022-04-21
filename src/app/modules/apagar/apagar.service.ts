import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { ContasPagar } from './model/contas-pagar';

@Injectable({
  providedIn: 'root'
})
export class ApagarService {

private readonly API = '/assets/financeiro.json'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<ContasPagar[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(resposta => console.log(resposta))      
    );
  }
}
