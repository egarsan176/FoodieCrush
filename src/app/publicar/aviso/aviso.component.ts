import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  @Input() opcion:string | undefined;

   // Indicamos que nuestro componente tendrá un eventemitter que regresa un string 
  @Output() showOption = new EventEmitter<string>();     

  constructor(){}

  //MÉTODO que emite el evento hasta el padre
  select():void{
      this.showOption.emit(this.opcion);   // lo se que va a emitir es el string que tenga opción
  }

  ngOnInit(): void {
  }



}
