import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://sheltered-scrubland-44821.herokuapp.com/api/';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get(`${url}productos`);
  }

  insert(producto: any){
    return this._http.post(`${url}producto`, producto);
  }

  update(productos: any){
    return this._http.put(`${url}producto/${productos.id}`, productos);
  }

  delete(id: number){
    return this._http.delete(`${url}producto/${id}`);
  }

  producto_find(id: number){
    return this._http.get(`${url}producto-find/${id}`);
  }
}
