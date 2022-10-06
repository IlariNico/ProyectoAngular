import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponentesComponent } from './tabla-componentes/tabla-componentes.component';
import { CarritoComponentesComponent } from './carrito-componentes/carrito-componentes.component';
import { FormsModule } from '@angular/forms';
import { ComputecnoAboutComponent } from './computecno-about/computecno-about.component';
import { ComputecnoComprasComponent } from './computecno-compras/computecno-compras.component';
import { InputEnterosComponent } from './input-enteros/input-enteros.component'

@NgModule({
  declarations: [
    AppComponent,
    TablaComponentesComponent,
    CarritoComponentesComponent,
    ComputecnoAboutComponent,
    ComputecnoComprasComponent,
    InputEnterosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
