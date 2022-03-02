import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerCategoriaComponent } from './ver-categoria.component';

const routes: Routes = [{ path: ':id', component: VerCategoriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerCategoriaRoutingModule { }
