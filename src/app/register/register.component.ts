import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // miFormulario: FormGroup = this.fb.group({
  //   nombre: ['', [ Validators.required, Validators.pattern( this.validatorService.nombreApellidoPattern ) ] ],
  //   email: ['', [ Validators.required, Validators.pattern( this.validatorService.emailPattern ) ], [ this.emailValidator ] ],
  //   username: ['', [ Validators.required, this.validatorService.noPuedeSerStrider ] ],
  //   password: ['', [ Validators.required, Validators.minLength(6) ]  ],
  //   password2: ['', [ Validators.required ]  ],
  // }, {
  //   validators: [ this.validatorService.camposIguales('password','password2') ]
  // });

  constructor() { }

  ngOnInit(): void {
  }
  register(){

  }

}
