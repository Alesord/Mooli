import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisListasPageRoutingModule } from './mis-listas-routing.module';

import { MisListasPage } from './mis-listas.page';
import { CrearListaComponent } from './crear-lista/crear-lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisListasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    MisListasPage,
    CrearListaComponent
  ],
  entryComponents: [CrearListaComponent]
})
export class MisListasPageModule {}
