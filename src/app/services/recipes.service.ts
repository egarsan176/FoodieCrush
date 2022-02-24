import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  
  export class RecipesService {

    
    private urlBase: string = environment.urlBase;  //url a la que hacer la petición

    constructor(private httpClient: HttpClient, public router: Router){}

    //http://localhost:9000/recipes?userID=1 
    getRecipes(){

      let token = localStorage.getItem('token');  //recupero el token
      let user = JSON.parse(<string>localStorage.getItem('user'))
      //console.log(user)
      const params = new HttpParams()
      .set('userID', user.id);

      const headers = new HttpHeaders({ //cabeceras necesarias para hacer la petición de tipo get y pasarle el token
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })

      const url = `${this.urlBase}/recipes?${params}`;

      return this.httpClient.get<any[]>(url, { headers });

    }
  }