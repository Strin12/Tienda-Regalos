import { NgForm } from '@angular/forms';
import { DistribuidoresService } from './../../services/distribuidores.service';
import { Component, OnInit } from '@angular/core';
import { Distribuidores } from 'src/app/models/distribuidores';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-distribuidor',
  templateUrl: './distribuidor.component.html',
  styleUrls: ['./distribuidor.component.css']
})
export class DistribuidorComponent implements OnInit {

  constructor(private _distribuidorService: DistribuidoresService) { }

  distribuidor: Distribuidores = new Distribuidores();
  datos: any;
  cargando: boolean = false;

  ngOnInit(): void {
    this.list()
  }

  list(){
    this._distribuidorService.list().subscribe(resp => {
      this.datos = resp;
      console.log(resp);
    })
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
    console.log(this.distribuidor);
    if(this.distribuidor.id){
      this._distribuidorService.update(this.distribuidor).subscribe(resp=>{
        Swal.fire({
          icon: 'success',
          title: 'Se actualizo correctament',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(resp);
        this.list();
        form.reset();
      });
    }else{
      this._distribuidorService.insert(this.distribuidor).subscribe(resp => {
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

  returnDistribuidor(variable){
    this.distribuidor.id = variable;
    console.log(variable);
    this._distribuidorService.distribuidor_find(this.distribuidor.id).pipe(
      map((resp: any)=>{
        this.distribuidor = resp;
        return this.distribuidor;
      })
    ).subscribe();
  }

  limpiar(){
    this.distribuidor.nombre = "";
    this.distribuidor.telefono = "";
    this.distribuidor.correo = "";
    this.distribuidor.numero_de_cuenta = "";
  }

  borrar(distribuidor: Distribuidores, i: number){
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
        console.log(distribuidor.id);
        this._distribuidorService.delete(distribuidor.id).subscribe(resp => {
          console.log(resp);
          this.datos.splice(i, 1);
        });
      }
    });
  }
}
