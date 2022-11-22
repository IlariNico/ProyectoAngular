import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ComponentePc } from './tabla-componentes/ComponentePc';

@Injectable({
  providedIn: 'root'
})
export class CarritoComponentesService {
  private _total=0;
  total:BehaviorSubject<number>=new BehaviorSubject(this._total);
  private _carrito:ComponentePc[]=[];
  carrito: BehaviorSubject <ComponentePc[]>=new BehaviorSubject(this._carrito);

  constructor() { }
  


  public agregarAlCarrito(componente:ComponentePc){
    let encontrado:boolean=false;
    
    this._carrito.forEach(com => {
      if(com!=undefined){
        if(com.nombre==componente.nombre)
          encontrado=true;
      }
    });
    if(!encontrado){
      this._carrito.push(componente);
      this._total+=componente.precio;
      this.total.next(this._total);
      this.carrito.next(this._carrito);
    }
    else
      alert("Usted ya posee este elemento en su carrito");
    
    
  }
  public eliminarDelCarrito(componente:ComponentePc){
    //te pido disculpas franco por este codigo medio desprolijo, no econtre una manera de borrar con los array
    //sin que me meta undefined en el medio, eso hace que se rompa el borrar si no los voy eliminando de a poco
    //se que no es la solución optima pero es lo que se me ocurrio a diferencia de los arraylist en java que borran
    //el objeto que les pases por parametro o la posicion que quieras
    let pos:number=0;
    let tam:number=this._carrito.length;
    
    this._carrito.forEach(com => {

      if(com.nombre==componente.nombre){
        delete(this._carrito[pos]);
        for(let i=pos;i<tam;i++){
          let aux:number=i+1;
          if(aux<tam)
            this._carrito[i]=this._carrito[aux];
          else
            this._carrito.pop();
        }
        this.carrito.next(this._carrito);
        this._total-=com.precio;
        this.total.next(this._total);
      }
      else
        pos++;
    });
   
    
  }
}
