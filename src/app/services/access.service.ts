import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interface';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccessService {

  private isLogueado: boolean = false;

  private urlBase: string = environment.urlBase;  //url a la que hacer la petición

  constructor(private httpClient: HttpClient) { }

  //MÉTODO para hacer login que hace una petición POST a la url de la api con  el email y el password
  login(email:string, password:string){

    const url= `${this.urlBase}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    this.isLogueado = true

    //  const opcionHeader = new HttpHeaders();
    //  opcionHeader.append('Access-Control-Allow-Origin','*'); //es necesario para la api back

    return this.httpClient.post<AuthResponse>(url, body); //devuelve la respuesta de la petición  access_token
   
  }

  //MÉTODO que comprueba si el token todavía no ha expirado
  //a este método se entra cada vez que se hace login porque el guardian interviene para dar acceso a /publicar
  validarToken():Observable<AuthResponse>{
    const url = `${this.urlBase}/login`; 
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.httpClient.get<AuthResponse>( url, { headers } )
  }

  //MÉTODO para poder borrar el token del local Storage
  logout(){
    localStorage.removeItem("token");
  }

  //MÉTODO para recuperar el token almacenado en el localStorage
  getToken(){
    return JSON.parse(<string>localStorage.getItem("token"));
  }

  //MÉTODO para comprobar si hay algún usuario que haya inciado sesión o no
  checkIsLogueado(){
    return this.isLogueado;
  }

  //MÉTODO para registrar un usuario que hace una petición POST a la url de la api pasándole un usuario
  register(user: Usuario){
    const url = `${this.urlBase}/auth/register`;  //la url de la api para registrar a un usuario
    const body = user;//es el usuario que se ha obtenido al rellenar todos los campos del registro

     const opcionHeader = new HttpHeaders(); //las cabeceras necesarias para hacer la petición
     opcionHeader.append('Access-Control-Allow-Origin','*');  
    return this.httpClient.post<AuthResponse>(url, body, {headers:opcionHeader}
      );
  }

  // //MÉTODO para obtener el id de un usuario
  // getUsuario(){
  //   const url = `${this.urlBase}/user`; //la url de la api que contiene a los usuarios
  //   let token = localStorage.getItem('token');  //recupero el token

  //   const headers = new HttpHeaders({ //cabeceras necesarias para hacer la petición de tipo get
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   })
  //   const options = {
  //     headers: headers
  //   }

  //   this.httpClient.get(url, options) //hago una petición al GetMapping /user del UserController que me devuelve el id del usuario
  //   .subscribe(data => {
  //     localStorage.setItem("idUsuario", String(data));
  //   })

  // }


}
