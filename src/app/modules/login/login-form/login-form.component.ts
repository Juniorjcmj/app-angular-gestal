import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  credentials = {
    username: "",
    password:""
  }
   

  constructor( private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){    

    if((this.credentials.username != "" && this.credentials.password != "")&& (this.credentials.username != null && this.credentials.password != null))
    {
        this.loginService.genereteToken(this.credentials.username, this.credentials.password).subscribe(
          (response:any) =>{   
                     //success
           localStorage.setItem('token', response.access_token);
           localStorage.setItem('expires_in', response.expires_in);
           localStorage.setItem('nome', response.nome_completo);
           localStorage.setItem('refresh_token', response.refresh_token);
           localStorage.setItem('token_type', response.token_type);          
           this.router.navigate(['apagar-page'])
             
          }, error =>{
            //error
            console.log(error);  
          }
        )

    }else{
      console.log("Campos estao vazios")
    }
  }

}
