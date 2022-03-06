import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AvisoComponent } from './aviso/aviso.component';
import { MostrarFormuComponent } from './mostrar-formu/mostrar-formu.component';


@NgModule({
  declarations: [
    PublicarComponent,
    AvisoComponent
  ],
  imports: [
    CommonModule,
    PublicarRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class PublicarModule { }
