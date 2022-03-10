import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FontSIZEComponent } from './font-size/font-size.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ScrollToTopComponent,
    FontSIZEComponent
  ],
  imports: [
    CommonModule,
    RouterModule  //para que funcione el routerLink de la navbar
  ],
  exports: [
    NavbarComponent,   //para usar el componente fuera del módulo shared (para colocarlo en el app-component)
    ScrollToTopComponent,
    FontSIZEComponent
  ]
})
export class SharedModule { }
