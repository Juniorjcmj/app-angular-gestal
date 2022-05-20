import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Compra } from './model/compra';


@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private readonly API = environment.apiUrlResourceServer;

  constructor(private httpClient: HttpClient) { }

  list(record: string){
    console.log(record)
    return this.httpClient.get<Compra[]>(`${environment.apiUrlResourceServer}v1/api-compra/`+ "?status="+record )
    .pipe(
      first()
    );
  }
  save(record: Compra){
     console.log(record)
   return  this.httpClient.post<Compra>(`${this.API}v1/api-compra/`, record).pipe(first());
  }

  // listEmpresa(){
  //   return this.httpClient.get<Empresa[]>(`${environment.apiUrlResourceServer}v1/api-empresa/` )
  //   .pipe(
  //     first(),
  //     tap(resposta => console.log(resposta))
  //   );
  // }
}
