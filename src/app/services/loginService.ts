import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private urlBase: string = environment.urlBase;  //url a la que hacer la petición


  constructor(private httpClient: HttpClient) { }

  //para hacer la petición a la url con el email y el password
  login(email:string, password:string){

    const url= `${this.urlBase}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }

    return this.httpClient.post<AuthResponse>(url, body); //devuelve la respuesta de la petición  access_token
    
  }

  //preguntar Joaquín
  validarToken():Observable<AuthResponse>{
    const url = `${this.urlBase}/tokenCheck`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.httpClient.get<AuthResponse>( url, { headers } )
  }


}
