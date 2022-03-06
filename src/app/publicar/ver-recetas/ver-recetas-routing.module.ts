import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/Auth.guard';
import { VerRecetasComponent } from './ver-recetas.component';

const routes: Routes = [{ path: '', component: VerRecetasComponent, canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerRecetasRoutingModule { }
