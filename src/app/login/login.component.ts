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

  //PROPIEDADES de la vista
  email: string = '';
  password: string = '';

  constructor(public router: Router,
              private accessService: AccessService) { }

  ngOnInit(): void {}

  //MÉTODO para iniciar sesión
  // Nos suscribimos al método de login del servicio pasando el email y la contraseña,
  // si el login es correcto, nos devuelve un token y accedemos a /publicar
  // sino es correcto, devolvemos el mensaje de error de la API
  login(){
    
    this.accessService.login(this.email, this.password)
    .subscribe({
      next: (data => {

        localStorage.setItem('token', data.access_token); 
        this.accessService.getUsuario(); //llamo a este método para almacenar el usuario en el localStorage

        Swal.fire({
          title: 'Sesión Iniciada',
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
