import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculasPage } from './peliculas.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PeliculasPage,
    children: [
      {
        path: 'ver-todas',
        children: [
          {
            path: '',
            loadChildren: () => import('./ver-todas/ver-todas.module').then( m => m.VerTodasPageModule)
          },
          {
            path: ':peliculaId',
            loadChildren: () => import('./ver-todas/ver-detalles/ver-detalles.module').then( m => m.VerDetallesPageModule)
          }
        ]
      },
      {
        path: 'buscar',
        loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
      },
      {
        path: 'mis-listas',
        loadChildren: () => import('./mis-listas/mis-listas.module').then( m => m.MisListasPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/peliculas/tabs/ver-todas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliculasPageRoutingModule {}
