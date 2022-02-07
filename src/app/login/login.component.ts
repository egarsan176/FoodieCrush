import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/loginService';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interfaces/interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormu: FormGroup = this.fb.group({
    email:! ['',[Validators.required,Validators.email]],
    password:! ['',[Validators.required,Validators.minLength(3)]],
  })

  user: Usuario = {
    email:'',
    password:''
  }

  constructor(public router: Router,
              private LoginService: LoginService,
              private fb: FormBuilder) { }

  ngOnInit(): void {}

  login(){
    //me suscribo al login del servicio y si me devuelve un token lo almaceno en el localStorage
    this.LoginService.login(this.user.email, this.user.password)
    .subscribe({
      next: (data => {
        console.log(data)
        localStorage.setItem('token', data.access_token!); 
        this.router.navigateByUrl('publicar');
      }),
      error: e =>{
        console.log(e.message);

        Swal.fire(//para que salte un alert si los datos introducidos no están en el database.json
          //{ 
          // title: 'Error al iniciar sesión',
          // text: 'Email o password proporcionados incorrectos',
          // icon: 'error',
          // confirmButtonText: 'Ok'
        //}
        'Error', e.error.message, 'error');  //para que devuelva si el error es del email o del password
        
      }
    })
  }
}
