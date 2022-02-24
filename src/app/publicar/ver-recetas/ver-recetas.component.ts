import { AfterViewInit, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Recipe } from 'src/app/interfaces/interface';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-ver-recetas',
  templateUrl: './ver-recetas.component.html',
  styleUrls: ['./ver-recetas.component.css']
})
export class VerRecetasComponent implements OnInit{
  
  recetario: any[] = [];

  dtOptions: DataTables.Settings = {} //para la configuración de la tabla
  dtOptionsLang : DataTables.LanguageSettings = {}
  
  dtTrigger: Subject<any> = new Subject<any>(); //como el recetario puede ser muy grande utilizamos el trigger para asegurarnos que los datos se extraen antes de la representación


  constructor(private recipesService: RecipesService,  private router: Router) { }


  ngOnInit(): void {

    this.recipesService.getRecipes().subscribe({
      next: (data => {
        ///////////////////////////////PREGUNTAR CRISTINA LO DEL BUCLE APRA ASOCIAR LOS DATOS
       
        this.dtTrigger.next(data); 
        this.recetario=data;
        console.log(data)
        //console.log(JSON.stringify(data))
      }),
      error: e =>{}
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength:5,  //para que muestre cinco resultados
      lengthMenu: [5,10,20]  //// por qué no coge las propiedades
    }
    this.dtOptionsLang.url = "https://cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json";
   
  }


  ngOnDestroy(): void {
    // Don't forget to unsubscribe to event.
    this.dtTrigger.unsubscribe();
  }

  





}
