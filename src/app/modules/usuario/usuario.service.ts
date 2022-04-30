import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { Cookie } from 'ng2-cookies';

const apiUrlAutenticator = environment.apiUrlAuthenticationServer + "oauth/token";
const apiUrlResourceServe= environment.apiUrlResourceServer + "oauth/token";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

   

}
