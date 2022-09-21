import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartComponent } from './chart/chart.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { UpperToolbarComponent } from './upper-toolbar/upper-toolbar.component';
import { Nivel2Component } from './side-drawer/nivel2/nivel2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChartComponent,
    SideDrawerComponent,
    UpperToolbarComponent,
    Nivel2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[SideDrawerComponent]
})
export class ComponentModule { }
