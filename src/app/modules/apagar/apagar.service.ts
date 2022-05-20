import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { ContasPagar } from './model/contas-pagar';
import { environment } from '../../../environments/environment';
import { Empresa } from './model/empresa';

@Injectable({
  providedIn: 'root'
})
export class ApagarService {

  private readonly API = environment.apiUrlResourceServer;

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<ContasPagar[]>(`${environment.apiUrlResourceServer}v1/api-financeiro/` )
    .pipe(
      first()
    );
  }
  save(record: ContasPagar){
    console.log(record)
   return  this.httpClient.post<ContasPagar>(`${this.API}v1/api-financeiro/`, record).pipe(first());
  }

  listEmpresa(){
    return this.httpClient.get<Empresa[]>(`${environment.apiUrlResourceServer}v1/api-empresa/` )
    .pipe(
      first(),
      tap(resposta => console.log(resposta))
    );
  }
}
