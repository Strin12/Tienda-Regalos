import { Categorias } from './../models/categorias';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = 'https://sheltered-scrubland-44821.herokuapp.com/api/';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get(`${url}categorias`);
  }

  insert(categoria: any){
    return this._http.post(`${url}categoria`, categoria);
  }

  update(categorias: any){
    return this._http.put(`${url}categoria/${categorias.id}`, categorias);
  }

  delete(id: number){
    return this._http.delete(`${url}categoria/${id}`);
  }

  categoria_find(id: number){
    return this._http.get(`${url}categoria-find/${id}`);
  }
}
