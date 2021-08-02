import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { RegalosComponent } from './Pages/regalos/regalos.component';
import { AboutComponent } from './Pages/about/about.component';
import { MarcaComponent } from './Pages/marca/marca.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { DistribuidorComponent } from './Pages/distribuidor/distribuidor.component';
import { ProductoComponent } from './Pages/producto/producto.component';
import { CrearProductoComponent } from './Pages/crear-producto/crear-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegalosComponent,
    AboutComponent,
    MarcaComponent,
    CategoriaComponent,
    DistribuidorComponent,
    ProductoComponent,
    CrearProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
