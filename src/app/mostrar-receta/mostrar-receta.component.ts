import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.component.html',
  styleUrls: ['./mostrar-receta.component.css']
})
export class MostrarRecetaComponent implements OnInit {

  recipe: any;
  ruta: string = "";


  constructor(private activeRoute: ActivatedRoute,
    private recipeService: RecipesService, 
    private route: Router) { }

  ngOnInit(): void {
    this.showRecipeDetails();
  }


  showRecipeDetails(){
    this.recipeService.showRecipe(this.activeRoute.snapshot.params["id"])
    .subscribe({
      next: data =>{
        console.log(data)
        this.recipe = data;
       
      },
      error: e =>{
        Swal.fire('Error', e.error.message, 'error')
      }
    })
  }

  back(){
    history.back();
  }

  routeActive(){
    this.ruta = this.route.url;
  }

}
