import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'  
  },
  
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'recetas', loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule) },
  { path: 'publicar', loadChildren: () => import('./publicar/publicar.module').then(m => m.PublicarModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'home', loadChildren: () => import('./app/home/home.module').then(m => m.HomeModule) },
  { path: 'mostrar', loadChildren:() => import('./mostrar-receta/mostrar-receta.module').then(m => m.MostrarRecetaModule)},

  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
