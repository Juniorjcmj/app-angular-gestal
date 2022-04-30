import { Component, OnInit } from '@angular/core';
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
   

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    

    if((this.credentials.username != "" && this.credentials.password != "")&& (this.credentials.username != null && this.credentials.password != null))
    {
        this.loginService.genereteToken(this.credentials.username, this.credentials.password).subscribe(
          (response:any) =>{            //success
          
             console.log(response.access_token);
             
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
