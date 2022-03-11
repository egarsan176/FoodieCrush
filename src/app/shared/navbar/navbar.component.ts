import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { AuthResponse, Usuario} from 'src/app/interfaces/interface';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ocultar: boolean = false;
  

  user!: Usuario | null;

  constructor(private accessService: AccessService, private route: ActivatedRoute) {
    this.accessService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
   
    //PRUEBAS OCULTAR LOGOUT NAVBAR
    // this.route.queryParams.subscribe(params =>{
    //   this.ocultar = params['ocultar'];
     
    // })

  }


  //MÉTODO que llama al logout() del servicio para cerrar la sesión del usuario
  onlogout() {
    this.accessService.logout();
  }







}
