import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { ContasPagar } from './model/contas-pagar';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApagarService {

  private readonly API = environment.apiUrlResourceServer;

  constructor(private httpClient: HttpClient) { }

  list(){         
    return this.httpClient.get<ContasPagar[]>(`${environment.apiUrlResourceServer}v1/api-financeiro/` )
    .pipe(
      first(),
      tap(resposta => console.log(resposta))      
    );
  }
  save(record: ContasPagar){
   return  this.httpClient.post<ContasPagar>(this.API, record).pipe(first());
  }
}
