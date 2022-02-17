import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientLine, Recipe } from '../interfaces/interface';
import { AccessService } from '../services/access.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  ingrediente: string = "";
  cantidad!: number;
  paso:string ="";
  ingredientes: string [] = [];
  cantidades : number [] = [];


  recipe: Recipe = {
    recipeName: '',
    method: [],
    category: 0,
    ingredientLine: []
  }

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
  }

  agregarIngrediente(){
    this.ingredientes.push(this.ingrediente);
    this.ingrediente="";
    console.log(this.ingredientes)
  }

  agregarCantidad(){
    this.cantidades.push(this.cantidad);
    this.cantidad=0;
  }

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

  agregarPaso(){
    this.recipe.method.push(this.paso)
  }

  eliminar(index: number){
    this.ingredientes.splice(index, 1);
    this.cantidades.splice(index, 1);
  }

  publicar(){

    //id = this.accessService.getUsuario();

    //console.log(JSON.stringify(this.recipe));

    this.accessService.publicar(this.recipe).subscribe();
  }

}
