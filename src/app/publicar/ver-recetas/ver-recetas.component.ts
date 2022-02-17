import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.component.html',
  styleUrls: ['./ver-recetas.component.css']
})
export class VerRecetasComponent implements OnInit {

  @Input()  //será una variable recibida de otro componente a través de un property binding en el padre
  texto: string ="";

  constructor() { }

  ngOnInit(): void {
  }

}
