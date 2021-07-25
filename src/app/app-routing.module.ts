import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Pages/about/about.component';
import { RegalosComponent } from './Pages/regalos/regalos.component';

const routes: Routes = [
  { path: '', redirectTo: '/regalos', pathMatch: 'full' },
  { path: 'regalos', component: RegalosComponent },
  { path: 'about', component: AboutComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
