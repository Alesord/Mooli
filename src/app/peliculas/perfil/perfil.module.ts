import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { PerfilOpcionesComponent } from './perfil-opciones/perfil-opciones.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
  ],
  declarations: [
    PerfilPage, 
    PerfilOpcionesComponent
  ]
})
export class PerfilPageModule {}
