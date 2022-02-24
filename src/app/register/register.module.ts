import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailValidatorService } from '../services/email-validator.service';
import { ValidatorService } from '../services/validator.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,  //necesario para cargar el FormBuilder
    SharedModule
  ],
  exports: [
    RegisterComponent
  ],
  providers:[
    EmailValidatorService,
    ValidatorService
  ]
})
export class RegisterModule { }
