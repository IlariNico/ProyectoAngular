import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponentesComponent } from './tabla-componentes/tabla-componentes.component';
import { CarritoComponentesComponent } from './carrito-componentes/carrito-componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponentesComponent,
    CarritoComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
