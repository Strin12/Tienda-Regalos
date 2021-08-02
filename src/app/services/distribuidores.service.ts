import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Distribuidores } from '../models/distribuidores';


const url = 'https://sheltered-scrubland-44821.herokuapp.com/api/';

@Injectable({
  providedIn: 'root'
})
export class DistribuidoresService {

  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get(`${url}distribuidores`);
  }

  insert(distribuidor: any){
    return this._http.post(`${url}distribuidor`, distribuidor);
  }

  update(distribuidores: any){
    return this._http.put(`${url}distribuidor/${distribuidores.id}`, distribuidores);
  }

  delete(id: number){
    return this._http.delete(`${url}distribuidor/${id}`);
  }

  distribuidor_find(id: number){
    return this._http.get(`${url}distribuidor-find/${id}`);
  }
}
