import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css']
})
export class AvisoComponent implements OnInit {

  @Output() outputEmiter = new EventEmitter<string>();

  user = JSON.parse(<string>localStorage.getItem('user'));

  constructor() { }

  ngOnInit(): void {
  }

  avisar(){
    this.outputEmiter.emit(this.user.fullName + ", tu receta se ha publicado satisfactoriamente.") ;
  }



}
