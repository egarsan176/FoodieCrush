import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule  //para que funcione el routerLink de la navbar
  ],
  exports: [
    NavbarComponent   //para usar el componente fuera del módulo shared (para colocarlo en el app-component)
  ]
})
export class SharedModule { }
