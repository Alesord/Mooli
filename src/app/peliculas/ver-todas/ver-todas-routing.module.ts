import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTodasPage } from './ver-todas.page';

const routes: Routes = [
  {
    path: '',
    component: VerTodasPage
  },
  {
    path: 'ver-detalles',
    loadChildren: () => import('./ver-detalles/ver-detalles.module').then( m => m.VerDetallesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTodasPageRoutingModule {}
