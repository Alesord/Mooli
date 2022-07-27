import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTodasPageRoutingModule } from './ver-todas-routing.module';

import { VerTodasPage } from './ver-todas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTodasPageRoutingModule
  ],
  declarations: [VerTodasPage]
})
export class VerTodasPageModule {

}
