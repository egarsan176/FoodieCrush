import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';
import { FormsModule } from '@angular/forms';
import { SaludoComponent } from './saludo/saludo.component';


@NgModule({
  declarations: [
    PublicarComponent,
    SaludoComponent
  ],
  imports: [
    CommonModule,
    PublicarRoutingModule,
    FormsModule
  ]
})
export class PublicarModule { }
