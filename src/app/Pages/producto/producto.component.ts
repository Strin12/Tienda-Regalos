import { NgForm } from '@angular/forms';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { Productos } from 'src/app/models/productos';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private _productoService: ProductosService) { }

  producto: Productos = new Productos();
  datos: any;
  cargando: boolean = false;

  ngOnInit(): void {
    this.list();
  }


  list(){
    this.cargando = true;
    this._productoService.list().subscribe(resp => {
      this.cargando = false;
      this.datos = resp;
      console.log(resp);
    });
  }

  guardar(form: NgForm) {
    if(form.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un error',
        text: 'Favor de verificar los datos ingresados',
        timer: 1500,
      });
      console.log('Formulario no valido');
      return;
    }
    console.log(this.producto);
    if(this.producto.id){
      this._productoService.insert(this.producto).subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'El distribuidor se registro con éxito',
          showConfirmButton: false,
          timer: 1500,
        });
        this.list();
        form.reset();
      });
    }
  }

  returnProducto(variable){
    this.producto.id = variable;
    console.log(variable);
    this._productoService.producto_find(this.producto.id).pipe(
      map((resp: any)=>{
        this.producto = resp;
        return this.producto;
      })
    ).subscribe();
  }

  limpiar(){
    this.producto.nombre = "";
    this.producto.unidad = "";
    this.producto.cant_max = 0;
    this.producto.cant_min = 0;
    this.producto.precio = 0;
    this.producto.cantidad = 0;
    this.producto.codigo = "";
    this.producto.categoria_id = 0;
    this.producto.marca_id = 0;
  }

  borrar(producto: Productos, i: number){
    Swal.fire({
      title: '¿Estas seguro que quieres Eliminar este dato?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: 'success',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result)=>{
      if(result.value){
        console.log(producto.id);
        this._productoService.delete(producto.id).subscribe(resp=>{
          console.log(resp);
          this.datos.splice(i, 1);
        })
      }
    })
  }


}
