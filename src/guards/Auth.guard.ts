import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { catchError, map, Observable, of } from "rxjs";
import { LoginService } from "src/app/services/loginService";
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })

  export class AuthGuard implements CanActivate{

    constructor(private serviceLogin: LoginService, public router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
      return this.serviceLogin.validarToken()
      .pipe(
        map( resp => {
            //si me devuelve algo (un [] vacío) significa que el token NO ha expirado
          console.log(resp);

          return true
        }),
        catchError( e => {
          //si me devuelve error es que el token ha expirado
          console.log(e.message);
            Swal.fire(  //devuelve el mensaje de la fakeAPi verificarToken
            //   {
            //   title: 'Su token ha expirado',
            //   text: 'Inicie sesión',
            //   icon: 'error',
            //   confirmButtonText: 'Ok'
            // }
            'Error', e.error.message,'error')

            //si el token no es válido me redirije al home
            this.router.navigate(['']); // es lo mismo que: this.router.navigateByUrl('home');
            return of(false)
        })
      )
    }
    
}