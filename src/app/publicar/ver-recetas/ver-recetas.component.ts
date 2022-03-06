import {  Component, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.component.html',
  styleUrls: ['./ver-recetas.component.css']
})
export class VerRecetasComponent implements OnInit{

  user = JSON.parse(<string>localStorage.getItem('user'))
  
  recetario: any[] = [];

  dtOptions: DataTables.Settings = {} //para la configuración de la tabla
  
  dtTrigger: Subject<any> = new Subject<any>(); //como el recetario puede ser muy grande utilizamos el trigger para asegurarnos que los datos se extraen antes de la representación


  constructor(private recipesService: RecipesService) { }


  ngOnInit(): void {

    //nos suscribimos al getRecipes()
    //si la suscripicón tiene éxito, obtenemos todas las receta del usuario
    //se coloca en el init para cargar la datatable al iniciar el componente
    this.recipesService.getRecipes().subscribe({
      next: (data => {
       
        this.dtTrigger.next(null); //si no lo llamamos con null se carga las opciones,
        this.recetario=data;
      }),
      error: e =>{}
    })
   
    this.dtOptions = {
      pagingType: 'full_numbers',
      responsive: true,
      pageLength:5,  //para que muestre cinco resultados
      lengthMenu: [5,10,20],
      language: {
      url: 'http://cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json'
      }
      };
  }


  ngOnDestroy(): void {
    // Don't forget to unsubscribe to event.
    this.dtTrigger.unsubscribe();
  }

  //método para volver atrás
  back(){
    history.back();
  }

}
