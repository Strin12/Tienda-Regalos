import { Categorias } from './../../models/categorias';
import { NgForm } from '@angular/forms';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categorias = new Categorias();
  datos: any;
  cargando: boolean = false;

  constructor(private _categoriaService: CategoriasService ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.cargando = true;
    this._categoriaService.list().subscribe(resp => {
      this.cargando = false;
      this.datos = resp;
      console.log(resp);
    });
  }

  guardar(form: NgForm){
    if(form.invalid){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Favor de verificar los datos ingresados',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    console.log(this.categoria);
    if(this.categoria.id) {
      this._categoriaService.update(this.categoria).subscribe(resp => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se actualizo correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.list();
        form.reset();
      });
    }else{
      this._categoriaService.insert(this.categoria).subscribe(resp => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La categoría se registro con éxito',
          showConfirmButton: false,
          timer: 1500,
        });
        this.list();
        form.reset();
      })
    }
  }

  returnCategoria(variable){
    this.categoria.id = variable;
    console.log(variable);
    this._categoriaService.categoria_find(this.categoria.id).pipe(
      map((resp: any)=>{
        this.categoria = resp;
        return this.categoria;
      })
    ).subscribe();
  }

  limpiar(){
    this.categoria.nombre = "";
  }

  borrar(categoria: Categorias, i: number){
    Swal.fire({
      title: '¿Estas seguro que quieres Eliminar este dato?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: 'success',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if(result.value) {
        console.log(categoria.id);
        this._categoriaService.delete(categoria.id).subscribe(resp => {
          console.log(resp);
          this.datos.splice(i, 1);
        });
      }
    });
  }
}
