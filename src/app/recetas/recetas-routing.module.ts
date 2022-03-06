import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas.component';

const routes: Routes = [
  { path: '', component: RecetasComponent },
  { path: 'verCategoria', loadChildren: () => import('./ver-categoria/ver-categoria.module').then(m => m.VerCategoriaModule) }, 
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetasRoutingModule { }
