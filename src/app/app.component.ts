import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AccessService } from './services/access.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodieCrush';

  //explicación stackoverflow 
  
  //Te deberías subscribir en el ngOnInit, o en el constructor, yo la función que uso para detectar los
  //cambios de ruta es el router.events y filtrando por NavigationEnd.
  //no esta mal que te desuscribas en el ondestroy, ya que si vuelves a cargar el componente,
  //te volverá a subscribir al evento, y tendrás dos subscribers, pero tendrás que suscribirte
  //asignándolo a una variable para desuscribir ese mismo objeto.

  // public isSubscribe!: Subscription;

  // isLogueado: boolean = false;

  constructor(private router: Router, private accessService: AccessService){
    //me subscribo al router events, que es el que te mandara los eventos cada vez
    //que se inicie la navegación, y filtramos que solo te mande cuando termina de navegar NavigationEnd
    // this.isSubscribe = this.router.events
    // .pipe(filter((event) => event instanceof NavigationEnd))
    // .subscribe((event) => {
    //   console.log(event);
    //   this.check();
    // });
  }

  // check(){
  //   //Si la ruta de la barra de navegación en ese momento contiene /publicar quiere decir que hay un usuario que ha hecho login
  //   console.log(this.router.url);
  //   if (this.router.url.includes('publicar')  && this.accessService.getToken != null) {
  //     this.isLogueado = true;
  //   }else{
  //     this.isLogueado = false;
  //   }
  // }

  // //En el onDestroy, valido si mi subscriber sigue activo y me desuscribo,
  // //si no seguirá activo escuchando cuando navegues a otro componente donde no lo requieras.
  // ngOnDestroy() {
  //   this.isSubscribe?.unsubscribe();
  // }
}
