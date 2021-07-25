import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcas } from '../models/marcas';
const url = 'http://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  constructor(private http: HttpClient) { }

list(){
  return this.http.get(`${url}marcas`);
}
insert(marca: any){
  return this.http.post(`${url}marca`, marca);
}
update(marcas: Marcas){
  return this.http.put(`${url}marca/${marcas.id}`, marcas);
}
delete(id: number){
  return this.http.delete(`${url}marca/${id}`);
}
marca_find(id: number){
  return this.http.get(`${url}marca-find/${id}`);
}

}
