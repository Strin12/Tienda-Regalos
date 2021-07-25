import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Marcas } from 'src/app/models/marcas';
import { MarcasService } from 'src/app/services/marcas.service';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
marca: Marcas = new Marcas();
datos: any;
cargando: boolean = false;
constructor(private marcas: MarcasService) { }

  ngOnInit(){
    this.list();
  }

  list(){
    this.cargando = true;

    this.marcas.list().subscribe(
      resp => {
        this.datos = resp;
        this.cargando = false;
        console.log(this.datos);
      }
    );
  }
  guardar(from: NgForm) {
    if (from.invalid) {
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
    console.log(this.marca);
    if (this.marca.id) {
      this.marcas.update(this.marca).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se actualizo correctament',
            showConfirmButton: false,
            timer: 1500,
          });
          this.list();
          from.reset();
        });
    }
    else {
      this.marcas.insert(this.marca).subscribe(
        resp => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El hospital se registro correctamente',
            showConfirmButton: false,
            timer: 1500,
          });
          this.list();
          from.reset();

        });
    }    
  }
  returnMarca(variable) {
    this.marca.id = variable;
    console.log(variable);
    this.marcas.marca_find(this.marca.id).pipe(
      map((resp: any) => {
        this.marca = resp;
        //console.log(this.registro);
        return this.marca;
      })
    ).subscribe();
  }
 limpiar(){
   this.marca.nombre = "";
 }
 borrar(marca: Marcas, i: number) {
  Swal.fire({
    title: '¿Estas seguro que quieres Eliminar este dato?',
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: 'success',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.value) {
      console.log(marca.id);
      this.marcas.delete(marca.id).subscribe(
        resp => {
          console.log(resp);
          this.datos.splice(i, 1);

        }
      )
    }
  })
}
}
