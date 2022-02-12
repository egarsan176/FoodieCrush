import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from '../services/validator.service';
import { EmailValidatorService } from '../services/email-validator.service';
import { AccessService } from '../services/access.service';
import { Usuario } from '../interfaces/interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  user: Usuario = {
    fullName: '',
    username: '',
    email: '',
    password: ''
  }

  //formGroup (un grupo de controles) realiza un seguimiento del valor y estado de cambio y validez de los datos
  miFormulario: FormGroup = this.fb.group({
    //el nombre tiene que pasar el patrón que se declara en el servicio que indica que tiene que ser nombre y apellido
    fullName: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],

    //tiene que concordar con el patrón de email del validator-service y además this.emailValidator para el servicio de email-validator
    email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
    
    //username mínimo 5 caracteres
    username: ['', [ Validators.required], Validators.min(5) ],

    //tiene que cumplir con el patrón indicado en el validator-service
    password: ['', [ Validators.required, Validators.pattern( this.validatorService.passwordPattern ) ]  ],
    password2: ['', [ Validators.required ]  ],

    condiciones: [ false, Validators.requiredTrue ]
  }, 
  {
    //para comprobar que la contraseña sea la misma en los dos campos
    validators: [ this.validatorService.camposIguales('password','password2') ]
  });

  //mensajes para el error del campo email
  get emailErrorMsg(): string {   
    const errors = this.miFormulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'El email es obligatorio';
    } else if ( errors['pattern'] ) { //si no concuerda con el patrón del validator.service
      return 'El valor ingresado no tiene formato de correo';
    } else if ( errors['emailTomado'] ) { //si ya existe ese email (email-validator)
      return 'Este email ya está registrado en el sistema';
    }

    return '';
  }

  //mensajes para el error del campo username
  get userNameErrorMsg(): string{
    const errors = this.miFormulario.get('username')?.errors!;
    if(errors['required']){
      return 'El nombre de usuario es obligatorio';
    }else if(errors['pattern']){  //si no concuerda con el patrón del validator.service
      return 'Debe tener como mínimo 5 caracteres';
    }
      return '';
  }

  //mensajes para el error del nombre
  get nameErrorMsg(): string{
    const errors = this.miFormulario.get('nombre')?.errors!;
    if(errors['required']){
      return 'Este campo es obligatorio';
    }else if(errors['pattern']){  //si no concuerda con el patrón del validator.service
      return 'Debe introducir un nombre y un apellido';
    }
      return '';
  }


  constructor(private fb: FormBuilder,
              private accessService: AccessService,
              private validatorService: ValidatorService,
              private emailValidator : EmailValidatorService ) { }

  ngOnInit(): void {
    //para que cada vez que se cargue la página el formulario no contenga datos anteriores
    this.miFormulario.reset({
      fullName: '',
      email: '',
      username: '',
      password: '',
      condiciones: false
    })

  }


  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  register(){
    //console.log(this.miFormulario.value);
    let user: Usuario = this.miFormulario.value
    console.log(user)

    this.accessService.register(user).subscribe();  //hago la petición de registro
    //this.miFormulario.markAllAsTouched();

    //borro los datos al hacer submit
    this.miFormulario.reset({
      fullName: '',
      email: '',
      username: '',
      password: '',
      condiciones: false
    })
   }


}
