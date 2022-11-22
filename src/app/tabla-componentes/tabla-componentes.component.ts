import { Component, OnInit } from '@angular/core';
import { CarritoComponentesService } from '../carrito-componentes.service';
import { DatosComponentesService } from '../datos-componentes.service';
import { ComponentePc } from './ComponentePc';

@Component({
  selector: 'app-tabla-componentes',
  templateUrl: './tabla-componentes.component.html',
  styleUrls: ['./tabla-componentes.component.scss']
})
export class TablaComponentesComponent implements OnInit {

  
  componentesPc:ComponentePc[]=[];

  constructor(private carrito:CarritoComponentesService,private datosComponentes:DatosComponentesService) { 
    
  }
  agregarAlCarrito(componente:ComponentePc){
    this.carrito.agregarAlCarrito(componente);
  }

  ngOnInit(): void {
    this.datosComponentes.obtenerTodos().subscribe(c=>this.componentesPc=c);
  }

}
