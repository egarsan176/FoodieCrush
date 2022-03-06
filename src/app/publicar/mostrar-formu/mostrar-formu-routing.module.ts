import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarFormuComponent } from './mostrar-formu.component';

const routes: Routes = [{ path: '', component: MostrarFormuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarFormuRoutingModule { }
