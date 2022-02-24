import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarRecetaRoutingModule } from './mostrar-receta-routing.module';
import { MostrarRecetaComponent } from './mostrar-receta.component';


@NgModule({
  declarations: [
    MostrarRecetaComponent
  ],
  imports: [
    CommonModule,
    MostrarRecetaRoutingModule
  ]
})
export class MostrarRecetaModule { }
