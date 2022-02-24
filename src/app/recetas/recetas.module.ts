import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetasRoutingModule } from './recetas-routing.module';
import { RecetasComponent } from './recetas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RecetasComponent
  ],
  imports: [
    CommonModule,
    RecetasRoutingModule,
    SharedModule
  ]
})
export class RecetasModule { }
