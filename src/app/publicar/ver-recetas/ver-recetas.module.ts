import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerRecetasRoutingModule } from './ver-recetas-routing.module';
import { VerRecetasComponent } from './ver-recetas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from "angular-datatables"; //npm i angular-datatables


@NgModule({
  declarations: [
    VerRecetasComponent
  ],
  imports: [
    CommonModule,
    VerRecetasRoutingModule,
    SharedModule,
    DataTablesModule
  ]
})
export class VerRecetasModule { }
