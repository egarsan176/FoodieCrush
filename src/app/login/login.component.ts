import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccessService } from '../services/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(public router: Router,
              private accessService: AccessService) { }

  ngOnInit(): void {}

  login(){
    //me suscribo al login del servicio y si me devuelve un token lo almaceno en el localStorage
    this.accessService.login(this.email, this.password)
    .subscribe({
      next: (data => {
        //console.log(data) muestra el token
        localStorage.setItem('token', data.access_token!); 
        //si el login es exitoso y me devuelve el token puedo navegar a /publicar
        this.router.navigateByUrl('publicar');
      }),
      error: e =>{
        console.log(e.message);
        //PREGUNTAR POR QUÉ NO SALE EL MENSAJE CORRECTO
        Swal.fire(
        'Error', e.error.message, 'error');  //para que devuelva si el error es del email o del password
        
      }
    })
  }
}
