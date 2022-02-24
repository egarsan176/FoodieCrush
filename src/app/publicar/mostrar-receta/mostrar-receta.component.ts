import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IDemoNgComponentEventType } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.component.html',
  styleUrls: ['./mostrar-receta.component.css']
})
export class MostrarRecetaComponent implements OnInit {

  @Output()
  emitter = new Subject<IDemoNgComponentEventType>();

  @Input()
  data = {};

  constructor() { }

  ngOnInit(): void {
  }

  onAction1() {
    this.emitter.next({
      cmd: "action1",
      data: this.data,
    });
  }

  ngOnDestroy() {
    this.emitter.unsubscribe();
  }

}
