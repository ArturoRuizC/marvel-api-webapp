import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BitacoraComponent } from './bitacora/bitacora/bitacora.component';
import { HeroesComponent } from './marvel-heroes/heroes/heroes.component';
import { HeroeDetalleComponent } from './marvel-heroes/heroe-detalle/heroe-detalle.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BitacoraComponent,
    HeroesComponent,
    HeroeDetalleComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
