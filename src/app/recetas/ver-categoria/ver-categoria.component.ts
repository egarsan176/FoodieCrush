import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.css']
})
export class VerCategoriaComponent implements OnInit {

  recetario: any[] = [];

  constructor(private recipeService: RecipesService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.showCategories();
  }


  showCategories(){
    this.recipeService.getRecipesByCategory(this.activeRoute.snapshot.params["id"])
    .subscribe({
      next: data =>{
        console.log(data)
        this.recetario = data;
       
      },
      error: e =>{
        Swal.fire('Error', e.error.message, 'error')
      }
    })
  }

}
