import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from '../services/validator.service';
import { EmailValidatorService } from '../services/email-validator.service';
import { AccessService } from '../services/access.service';
import { Usuario } from '../interfaces/interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  //objeto del formulario
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
    username: ['', [ Validators.required, Validators.min(5) ]],

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
    }else if(errors['min']){  //si no concuerda con el patrón del validator.service
      return 'Debe tener como mínimo 5 caracteres';
    }
      return '';
  }

  //mensajes para el error del nombre
  get nameErrorMsg(): string{
    const errors = this.miFormulario.get('fullName')?.errors!;
    if(errors['required']){
      return 'Este campo es obligatorio';
    }else if(errors['pattern']){  //si no concuerda con el patrón del validator.service
      return 'Debe introducir un nombre y un apellido';
    }
      return '';
  }
  //mensajes para la contraseña
  get passwordErrorMsg(): string{
    const errors = this.miFormulario.get('password')?.errors!;
    if(errors['required']){
      return 'Este campo es obligatorio';
    }else if(errors['pattern']){  //si no concuerda con el patrón del validator.service
      return 'Mínimo 6 caracteres, una letra y un número';
    }
      return '';
  }


  constructor(private fb: FormBuilder,
              private accessService: AccessService,
              private validatorService: ValidatorService,
              private emailValidator : EmailValidatorService,
              public router: Router ) { }

  ngOnInit(): void {
    //para que cada vez que se cargue la página el formulario no contenga datos anteriores
    this.miFormulario.reset({
      ...this.user,
      condiciones: false
    })

    this.miFormulario.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      this.user = rest;
    })
    

  }


  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

    //MÉTODO que me dice qué campos del formulario son inválidos para saber dónde hay errores
    public findInvalidControlsRecursive(formToInvestigate:FormGroup|FormArray):string[] {
      var invalidControls:string[] = [];
      let recursiveFunc = (form:FormGroup|FormArray) => {
        Object.keys(form.controls).forEach(field => { 
          const control = form.get(field);
          if (control?.invalid) invalidControls.push(field);
          if (control instanceof FormGroup) {
            recursiveFunc(control);
          } else if (control instanceof FormArray) {
            recursiveFunc(control);
          }        
        });
      }
      recursiveFunc(formToInvestigate);
     
      return invalidControls;
    }

  //MÉTODO que se suscribe al register() del servicio para registar un usuario nuevo
  //si la suscripción es correcta, se almacena un nuevo usuario en la base de datos y nos lleva a la página /publicar
  async register(){
    //console.log(this.findInvalidControlsRecursive(this.miFormulario));
    
    this.miFormulario.markAllAsTouched();

    if(this.miFormulario.valid){
      let user: Usuario = this.miFormulario.value

      this.accessService.register(user)//hago la petición de registro
      .subscribe({
        next: (data => {
  
          localStorage.setItem('token', data.access_token); 
          this.accessService.getUsuario(); //llamo a este método para almacenar el usuario en el localStorage
          
              //borro los datos al hacer submit
          this.miFormulario.reset({
            fullName: '',
            email: '',
            username: '',
            password: '',
            condiciones: false
          })
          Swal.fire({
            title: 'Ya forma parte de la familia FoodieCrush',
            icon: 'success',
            confirmButtonText: 'Acceder',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('publicar');
            } 
          })
  
          
        }),
        error: e =>{
          Swal.fire(
          'Error', e.error.mensaje, 'error');  
          
        }
      })  
  
  
     }
  
    }
   

}
