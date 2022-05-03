import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn = false;
 
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.loggedIn = this.loginService.isLoggedIn();
    
    
  }

  logoutUser(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  user(){
    return localStorage.getItem('nome'); 
  }

}
