import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { MarcaComponent } from './Pages/marca/marca.component';
import { RegalosComponent } from './Pages/regalos/regalos.component';

const routes: Routes = [
  { path: '', redirectTo: '/regalos', pathMatch: 'full' },
  { path: 'regalos', component: RegalosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'marca', component: MarcaComponent },
  { path: 'categoria', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
