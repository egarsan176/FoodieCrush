import { Component, OnInit } from '@angular/core';
import { FileDB, IngredientLine, Recipe } from '../interfaces/interface';
import { AccessService } from '../services/access.service';
import Swal from 'sweetalert2';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {


  ingrediente: string = "";
  cantidad!: number;
  paso:string ="";
  pasos: string []= [];
  ingredientes: string [] = [];
  cantidades : number [] = [];
  category: number =0;

  file!: FileDB;
  aviso: boolean = false;
  msjHijo: string = "";
  
  recipe: Recipe = {
    recipeName: '',
    method: [],
    category: 0,
    ingredientLine: [],
    file: this.file
  }
  constructor(private accessService: AccessService,
    private uploadService: FileUploadService) { }

  ngOnInit(): void {}

  ///////////////////////////GESTIÓN DE LA LÍNEA DE INGREDIENTES

  //este método agrega un ingrediente al auxiliar de ingredientes
  agregarIngrediente(){
    if(!this.ingredientes.includes(this.ingrediente)){
      this.ingredientes.push(this.ingrediente);
    }
  }
  
  //este método agrega una cantidad al auxiliar de cantidades
  agregarCantidad(){
    this.cantidades.push(this.cantidad);
    this.ingrediente="";
    this.cantidad=0;
  }

  //este método elimina un ingrediente y su cantidad correspondiente de los auxiliares ingredientes[] y cantidades[]
  eliminar(index: number){
    this.ingredientes.splice(index, 1);
    this.cantidades.splice(index, 1);
  }

  //este método crea la línea de ingredientes de la receta a través de los auxiliares ingredientes[] y cantidades[]
  crearLinea(){
    if(this.ingredientes.length == this.cantidades.length){

      for (let index = 0; index < this.ingredientes.length; index++) {
        const nuevaLinea : IngredientLine = {
          "ingredient": this.ingredientes[index],
          "amount": this.cantidades[index]
        }
        this.recipe.ingredientLine.push(nuevaLinea);
      }
    }else{
      Swal.fire('Error', 'Recuerda que debes añadir una cantidad para cada ingrediente', 'error');
      this.ingredientes = [];
      this.cantidades = [];
    }
    
  }
  

  ///////////////////////////GESTIÓN DE LA LOS PASOS DE LA RECETA

  //este método agrega un paso al auxiliar de pasos[]
  agregarPaso(){
    if(!this.pasos.includes(this.paso)){
      this.pasos.push(this.paso);
    }
  }
  //este método elimina un paso del auxiliar de pasos[]
  eliminarPaso(index: number){
    this.pasos.splice(index, 1);
  }

  //este método confirma los pasos e iguala el auxiliar de pasos[] al recipe.method[]
  confirmarPasos(){
    this.recipe.method = this.pasos;
  }

  getFile(){
    this.uploadService.getFileByName().subscribe({
      next: (data =>{
        this.file = data;
        console.log(data);
        console.log(data.name)
      }),
      error: e => {
        console.log(e);
      }
    })
  }

  eventChild(msj : string){
    this.msjHijo = msj;
  }

  //método para publicar la receta en la bbdd a través de una petición al servicio pasando el objeto receta
  publicar(){
    this.getFile();
    
    //console.log(this.recipe)
    if(this.recipe.recipeName!="" && this.recipe.method.length>0 && this.recipe.category!=0 && this.recipe.ingredientLine.length>0){
      this.recipe.file = this.file;
      console.log(this.recipe.file)

      this.accessService.publicar(this.recipe)
      .subscribe({
        next: (data => {
          this.aviso = true;
          console.log(data);
          //window.location.reload();
          
          // this.recipe = {
          //   recipeName: '',
          //   method: [],
          //   category: 0,
          //   ingredientLine: [],
          //   file: 
          // };
        }), 
        error: e => {
          Swal.fire('Error', 'No se puede publicar la receta. '+e.error.mensaje, 'error');
        }
      }
  
      );
    }else{
      Swal.fire('Error', 'Todos los campos de la receta deben estar rellenos.', 'error');
    }

  }


}
