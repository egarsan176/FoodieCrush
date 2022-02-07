import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';


@NgModule({
  declarations: [
    PublicarComponent
  ],
  imports: [
    CommonModule,
    PublicarRoutingModule
  ]
})
export class PublicarModule { }
