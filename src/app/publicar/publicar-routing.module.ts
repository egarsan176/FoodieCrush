import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/Auth.guard';
import { PublicarComponent } from './publicar.component';

const routes: Routes = [

  { path: '', component: PublicarComponent, canActivate: [AuthGuard] },

  { path: 'ver', loadChildren: () => import('./ver-recetas/ver-recetas.module').then(m => m.VerRecetasModule) },

  { path: 'mostrar', loadChildren: () => import('./mostrar-receta/mostrar-receta.module').then(m => m.MostrarRecetaModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarRoutingModule { }
