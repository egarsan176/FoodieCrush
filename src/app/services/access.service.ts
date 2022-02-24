import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse, Recipe, Usuario } from '../interfaces/interface';
import { BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AccessService {

  private urlBase: string = environment.urlBase;  //url a la que hacer la petición

  private userSubject: BehaviorSubject<Usuario | null>;
  public user: Observable<Usuario | null>;

  constructor(private httpClient: HttpClient, public router: Router) { 
    this.userSubject = new BehaviorSubject<Usuario | null>(JSON.parse(localStorage.getItem('user') || '{}'));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): Usuario | null {
    return this.userSubject.value;
}

  //MÉTODO para hacer login que hace una petición POST a la url de la api con  el email y el password
  login(email:string, password:string){

    const url= `${this.urlBase}/auth/login`;
    const body = {
      'email': email,
      'password': password 
    }

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
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['']);
  }

  //MÉTODO para recuperar el token almacenado en el localStorage
  getToken(){
    return localStorage.getItem("token");
  }


  //MÉTODO para registrar un usuario que hace una petición POST a la url de la api pasándole un usuario
  register(user: Usuario){
    const url = `${this.urlBase}/auth/register`;  //la url de la api para registrar a un usuario
    const body = user;//es el usuario que se ha obtenido al rellenar todos los campos del formulario de registro

     const opcionHeader = new HttpHeaders(); //las cabeceras necesarias para hacer la petición
     opcionHeader.append('Access-Control-Allow-Origin','*');  

    return this.httpClient.post<AuthResponse>(url, body, {headers:opcionHeader});
  }

  //MÉTODO para obtener un usuario
  getUsuario(){

    const url = `${this.urlBase}/user`; //la url de la api que contiene a los usuarios
    let token = this.getToken(); //recupero el token

    const headers = new HttpHeaders({ //cabeceras necesarias para hacer la petición de tipo get pasando el token
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    const options = {
      headers: headers
    }

    return this.httpClient.get<Usuario>(url,options)   //hago una petición al GetMapping /user del UserController que me devuelve un usuario y lo almaceno en el localStorage
      .subscribe(user =>{
        localStorage.setItem('user',JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      });
  }

  //MÉTODO para publicar una receta en la bbdd
  publicar(recipe: Recipe){

    let token = this.getToken(); //localStorage.getItem('token');  recupero el token
    let user = JSON.parse(<string>localStorage.getItem('user')) //transformo en json el string de user para poder acceder a sus propiedades
    
    const url = `${this.urlBase}/recipes/${user.id}`;
    const body = recipe; //es la receta que se obtiene al rellenar el formulario de /publicar

    const headers = new HttpHeaders({ //cabeceras necesarias para hacer la petición de tipo get y pasarle el token
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.httpClient.post<Recipe>(url, body, {headers});
  }


  }
