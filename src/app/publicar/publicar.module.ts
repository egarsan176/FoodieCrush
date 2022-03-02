import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarRoutingModule } from './publicar-routing.module';
import { PublicarComponent } from './publicar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ArchivoUploadComponent } from './archivo-upload/archivo-upload.component';
import { AvisoComponent } from './aviso/aviso.component';


@NgModule({
  declarations: [
    PublicarComponent,
    ArchivoUploadComponent,
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
