import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FileDB } from 'src/app/interfaces/interface';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent implements OnInit {

  //PROPIEDADES
  recetario: any[] = [];
  categoria: any = "";

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //para que al iniciar el componente muestre los datos
    this.getCategoria();
    this.showCategories();
  }


  //MÉTODO que se suscribe al getRecipesByCatgery() del servcio
  //si la suscripción tiene éxito, muestra todas las recetas que corresponden a la categoría que coincide con el id que se le pasa
  showCategories(){
    this.recipeService.getRecipesByCategory(this.activeRoute.snapshot.params["id"])
    .subscribe({
      next: data =>{
        this.recetario = data;
      },
      error: e =>{
       console.log(e)
      }
    })
  }

  //MÉTODO que se suscribe al getCategory() del servicio
  //si la suscripción tiene éxito, nos da el nombre de la categoría que coincide con el id que se le pasa
  getCategoria(){
    let id = this.activeRoute.snapshot.params["id"];
    //console.log(id)
    this.recipeService.getCategory(id)
    .subscribe({
      next: data =>{
        this.categoria = data;
       
      },
      error: e =>{
        console.log(e)
      }
    })
  }

  //MÉTODO que a través del obtenerImagen() del servicio nos devuelve la imagen para visualizarla
  obtenerImagenReceta(file: FileDB){
    return this.recipeService.obtenerImagen(file);

  }

}
