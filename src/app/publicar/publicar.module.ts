import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicarComponent
  ],
  imports: [
    CommonModule,
    PublicarRoutingModule,
    FormsModule
  ]
})
export class PublicarModule { }
