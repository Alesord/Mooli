import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAListaPageRoutingModule } from './agregar-a-lista-routing.module';

import { AgregarAListaPage } from './agregar-a-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAListaPageRoutingModule
  ],
  declarations: [AgregarAListaPage]
})
export class AgregarAListaPageModule {}
