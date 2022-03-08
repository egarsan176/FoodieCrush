import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  user = JSON.parse(<string>localStorage.getItem('user'));

  //VARIABLES PARA EL USO DEL OUTPUT
  seleccion = '';

  opciones = [
    {title : 'Publicar Receta'},
    {title : 'Ver mis Recetas'}
  ];

  op1: boolean = false;
  op2: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  //MÉTODO que muestra el valor del componente hijo <app-aviso> y además hace que se muestre la opción seleccionada
  addOption(response: string) {
    this.seleccion = "Has elegido: " + response;      // Esta es la función que se va a ejecutar en el componente padre 
    if(response =="Publicar Receta"){
      this.op1 = true;
      this.op2 = false;
    }else if(response =="Ver mis Recetas"){
      this.op2 = true;
      this.op1 = false;
    }
  }


}
