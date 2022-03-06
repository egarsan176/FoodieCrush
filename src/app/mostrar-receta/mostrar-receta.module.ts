import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarRecetaRoutingModule } from './mostrar-receta-routing.module';
import { MostrarRecetaComponent } from './mostrar-receta.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MostrarRecetaComponent
  ],
  imports: [
    CommonModule,
    MostrarRecetaRoutingModule,
    SharedModule
  ],
  exports:[
    MostrarRecetaComponent
  ]
})
export class MostrarRecetaModule { }
