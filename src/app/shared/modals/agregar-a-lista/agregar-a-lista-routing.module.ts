import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAListaPage } from './agregar-a-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAListaPageRoutingModule {}
