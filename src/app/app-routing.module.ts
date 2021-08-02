import { CrearProductoComponent } from './Pages/crear-producto/crear-producto.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { MarcaComponent } from './Pages/marca/marca.component';
import { RegalosComponent } from './Pages/regalos/regalos.component';
import { DistribuidorComponent } from './Pages/distribuidor/distribuidor.component';
import { ProductoComponent } from './Pages/producto/producto.component';

const routes: Routes = [
  { path: '', redirectTo: '/regalos', pathMatch: 'full' },
  { path: 'regalos', component: RegalosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'marca', component: MarcaComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'distribuidor', component: DistribuidorComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'crearProd', component: CrearProductoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
