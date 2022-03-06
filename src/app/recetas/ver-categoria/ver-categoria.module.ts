import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerCategoriaRoutingModule } from './ver-categoria-routing.module';
import { VerCategoriaComponent } from './ver-categoria.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VerCategoriaComponent
  ],
  imports: [
    CommonModule,
    VerCategoriaRoutingModule,
    SharedModule
  ]
})
export class VerCategoriaModule { }
