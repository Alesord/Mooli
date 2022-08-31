import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChartComponent } from './chart/chart.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { UpperToolbarComponent } from './upper-toolbar/upper-toolbar.component';



@NgModule({
  declarations: [
    ChartComponent,
    SideDrawerComponent,
    UpperToolbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[SideDrawerComponent]
})
export class ComponentModule { }
