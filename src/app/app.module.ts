import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './marvel-heroes/heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { AppRouting } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BitacoraComponent,
    HeroesComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
