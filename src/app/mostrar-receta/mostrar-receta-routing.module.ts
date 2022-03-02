import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/Auth.guard';
import { MostrarRecetaComponent } from './mostrar-receta.component';

const routes: Routes = [
  { path: ':id', component: MostrarRecetaComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarRecetaRoutingModule { }
