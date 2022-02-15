import { Component, OnInit } from '@angular/core';
import { IngredientLine, Recipe } from '../interfaces/interface';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  

  name: string = "";
  ingrediente: string = "";
  cantidad!: number;
  paso:string ="";
  ingredientes: string [] = [];
  cantidades : number [] = [];
  ingredientLine: IngredientLine[] = [];

  recipe: Recipe = {
    recipeName: '',
    method: [],
    category: '',
    ingredientLine: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregarIngrediente(){
    this.ingredientes.push(this.ingrediente);
  }

  agregarCantidad(){
    this.cantidades.push(this.cantidad);
  }

  crearLinea(){
    const nuevaLinea : IngredientLine = {
      "ingredient": this.ingrediente,
      "amount": this.cantidad
    }
  
    
  }

  agregarPaso(){
    this.recipe.method.push(this.paso);
  }

  eliminar(index: number){
    this.recipe.ingredientLine.splice(index, 1);
  }

  publicar(){}

}
