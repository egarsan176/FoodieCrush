import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerRecetasComponent } from './ver-recetas.component';

const routes: Routes = [{ path: '', component: VerRecetasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerRecetasRoutingModule { }
