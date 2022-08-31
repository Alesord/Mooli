import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'peliculas',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'agregar-a-lista',
    loadChildren: () => import('./shared/modals/agregar-a-lista/agregar-a-lista.module').then( m => m.AgregarAListaPageModule)
  },  {
    path: 'calendar',
    loadChildren: () => import('./shared/native/calendar/calendar.module').then( m => m.CalendarPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
