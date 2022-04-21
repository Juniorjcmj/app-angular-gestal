import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header/header.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { ApagarModule } from './modules/apagar/apagar.module';
import { ConciliacaoModule } from './modules/conciliacao/conciliacao.module';
import { VeiculoModule } from './modules/veiculos/veiculo.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { ExpedicaoModule } from './modules/expedicao/expedicao.module';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './modules/login/login.module';
import { HomeComponent } from './modules/home/home/home.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AppBootstrapModule } from './shared/app-bootstrap.module';
import { AppMaterialModule } from './shared/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent
      
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppBootstrapModule,
    AppRoutingModule ,
    ApagarModule,
    ConciliacaoModule,
    VeiculoModule,
    UsuarioModule,
    ExpedicaoModule,
    LoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppMaterialModule,
    HttpClientModule
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
