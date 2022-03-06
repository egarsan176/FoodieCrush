import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MostrarFormuRoutingModule } from './mostrar-formu-routing.module';
import { MostrarFormuComponent } from './mostrar-formu.component';
import { ArchivoUploadComponent } from '../archivo-upload/archivo-upload.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MostrarFormuComponent,
    ArchivoUploadComponent
  ],
  imports: [
    CommonModule,
    MostrarFormuRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class MostrarFormuModule { }
