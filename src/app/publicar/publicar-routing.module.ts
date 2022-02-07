import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/Auth.guard';
import { PublicarComponent } from './publicar.component';

const routes: Routes = [

  { path: '', component: PublicarComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicarRoutingModule { }
