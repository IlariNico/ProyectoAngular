import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-enteros',
  templateUrl: './input-enteros.component.html',
  styleUrls: ['./input-enteros.component.scss']
})
export class InputEnterosComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad!: number;

  @Input()
  maximo!: number;

  @Output()
  cantidadChange=new EventEmitter<number>();

  @Output()
  seAlcanzoMax=new EventEmitter<number>();

  sumarCantidad(){
    if(this.cantidad<this.maximo){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.seAlcanzoMax.emit(this.maximo);
    }
    

  }

  cambiaValorCantidad(event:Event){
    this.cantidadChange.emit(this.cantidad);
  }

  restarCantidad(){
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
    
  }

  ngOnInit(): void {
  }

}
