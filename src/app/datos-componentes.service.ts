import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentePc } from './tabla-componentes/ComponentePc';

const ENDPOINT='https://637d23f89c2635df8f828d4a.mockapi.io/c1/componentes';

@Injectable({
  providedIn: 'root'
})
export class DatosComponentesService {

  constructor(private http:HttpClient) { }

  public obtenerTodos():Observable<ComponentePc[]>{
    return this.http.get<ComponentePc[]>(ENDPOINT);
  }
}
