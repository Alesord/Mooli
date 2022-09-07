import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './component/component.module';
import { LevelUpService } from './shared/services/level-up.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ComponentModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LevelUpService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
