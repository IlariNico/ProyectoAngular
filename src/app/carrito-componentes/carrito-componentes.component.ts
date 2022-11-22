import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoComponentesService } from '../carrito-componentes.service';
import { ComponentePc } from '../tabla-componentes/ComponentePc';

@Component({
  selector: 'app-carrito-componentes',
  templateUrl: './carrito-componentes.component.html',
  styleUrls: ['./carrito-componentes.component.scss']
})
export class CarritoComponentesComponent implements OnInit {
  total$:Observable<Number>;
  listado$: Observable<ComponentePc[]>;
  
  constructor(private carrito:CarritoComponentesService) {
    this.listado$=carrito.carrito.asObservable();
    this.total$=carrito.total.asObservable();
   }

   public eliminarDelCarrito(Componente:ComponentePc){
    this.carrito.eliminarDelCarrito(Componente);
    console.log(this.listado$);
   }

  ngOnInit(): void {
  }


}
