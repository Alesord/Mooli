import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartComponent } from './chart/chart.component';
import { BrowserComponent } from './browser/browser.component';



@NgModule({
  declarations: [
    ChartComponent,
    BrowserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentModule { }
