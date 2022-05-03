import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 apiUrlAutenticator = environment.apiUrlAuthenticationServer + "oauth/token";
 apiUrlResourceServe= environment.apiUrlResourceServer + "oauth/token";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  //buscar no servidoro token

  genereteToken(username: string, password:string){
    let params = new URLSearchParams();   
    params.append('grant_type','password');
    params.append('client_id', "jcmj");
    params.append('client_secret', 'abc123');
    params.append('username', username);
    params.append('password', password);
    

    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    return this.httpClient.post(`${this.apiUrlAutenticator}`,params.toString(),{ headers: headers })
  }
  // se esta logando ou nao
   loginUser(token: any){

    localStorage.setItem("token", token)
     return true;

   }
    isLoggedIn(){
      let token = localStorage.getItem("token");
      if(token== undefined || token ==="" || token == null){
        return false;
      }else{
        return true;
      }
    }
    logout(){
      localStorage.removeItem('token');
      return true;
    }

    getToken(){
      return  localStorage.getItem('token');
    }
}
