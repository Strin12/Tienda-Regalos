import { CategoriasService } from './../../services/categorias.service';
import { MarcasService } from 'src/app/services/marcas.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { Productos } from 'src/app/models/productos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  producto: Productos = new Productos();
  marca: any;
  categoria: any;

  constructor(private _productoService: ProductosService,
    private _marcaService: MarcasService,
    private _categoriaService: CategoriasService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarCategoria();
    this.listarMarca();

  }

  guardar(form: NgForm){
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
      this._productoService.update(this.producto).subscribe(resp=>{
        Swal.fire({
          icon: 'success',
          title: 'Se actualizo correctament',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(resp);
        form.reset();
      });
    }else{
      this._productoService.insert(this.producto).subscribe(resp => {
        Swal.fire({
          icon: 'success',
          title: 'El producto se registro con éxito',
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        this.router.navigateByUrl('/productos');
      });
    }
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

  listarMarca(){
    this._marcaService.list().subscribe(resp => {
      this.marca = resp;
      console.log(resp);
    });
  }

  listarCategoria(){
    this._categoriaService.list().subscribe(resp => {
      this.categoria = resp;
      console.log(resp);
    });
  }
}
