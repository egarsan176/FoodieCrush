import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarRecetaComponent } from './mostrar-receta.component';

const routes: Routes = [{ path: '', component: MostrarRecetaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarRecetaRoutingModule { }
