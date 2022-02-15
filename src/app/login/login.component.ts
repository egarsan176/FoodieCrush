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

        localStorage.setItem('token', data.access_token!); 
        //si el login es exitoso y me devuelve el token puedo navegar a /publicar
        this.router.navigateByUrl('publicar');
      }),
      error: e =>{
        //para que devuelva si el error es del email o del password
        //el mensaje viene de la API
        Swal.fire(
        'Error', e.error.mensaje, 'error');  
        
      }
    })
  }
}
