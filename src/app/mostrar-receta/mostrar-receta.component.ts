import { Component,  OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import Swal from 'sweetalert2';
import { FileDB, Usuario } from '../interfaces/interface';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-mostrar-receta',
  templateUrl: './mostrar-receta.component.html',
  styleUrls: ['./mostrar-receta.component.css']
})
export class MostrarRecetaComponent implements OnInit {

  //PROPIEDADES
  recipe: any;
  ruta: string = "";
  user!: Usuario;
  file!: FileDB;
  img: string = "";
  mostrar: boolean = false;


  constructor(private activeRoute: ActivatedRoute,
    private recipeService: RecipesService, 
    private fileService: FileUploadService) { }

  ngOnInit(): void {
    this.showRecipeDetails(); //para que la receta se muestre al cargar la página
  }


  //MÉTODO que se suscribe al showRecipe() del servicio
  // si la suscripción tiene éxito nos devuelve los detalles de la receta que coincide con el id que indicamos
  // si no es correcta nos devuelve el mensaje de error de la API
  showRecipeDetails(){
    this.recipeService.showRecipe(this.activeRoute.snapshot.params["id"])
    .subscribe({
      next: data =>{
        this.getUserByRecipe(data.id);  //para obtener al usuario asociado a esa receta
        this.getFileByRecipe(data.id);  //para obtener la imagen asociada a esa receta
        this.recipe = data;
        this.mostrar=true;
      },
      error: e =>{
        Swal.fire('Error', e.error.message, 'error')
      }
    })
  }


  //MÉTODO que se suscribe al getUserByRecipe() del servicio
  // si la suscripción tiene éxito nos devuelve el usuario de la receta que coincide con el id que le pasamos
  // si no es correcta nos devuelve error
  getUserByRecipe(id: number){
    this.recipeService.getUserByRecipe(id).subscribe({
      next: data =>{
        this.user = data;
      },
      error: e =>{
        console.log(e);
      }
    })
  }

  //MÉTODO que se suscribe al getFileByRecipe() del servicio
  // si la suscripción es correcta, nos devuelve el fichero asociado a la receta que coincide con el id que le pasamos
  // si no es correcta nos devuelve error
  getFileByRecipe(id:number){
    this.fileService.getFileByRecipeID(id).subscribe({
      next: data =>{
        this.img = this.recipeService.obtenerImagen(data);
      },
      error: e =>{
        console.log(e);
      }
    })
  }


  //MÉTODO que sirve para volver a la página anterior
  //PARA GESTIONAR QUE EL VOLVER SEA DIFERENTE DEPENDIENDO DE LA RUTA QUE SE HAYA SEGUIDO PARA LLEGAR HASTA AQUÍ 
  // (componente reutilizable)
  back(){
    history.back();
  }


}
