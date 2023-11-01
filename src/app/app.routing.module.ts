import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './marvel-heroes/heroes/heroes.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

const routes: Routes = [
  { path: 'marvel-heroes/heroes', component: HeroesComponent },
  { path: 'bitacora', component: BitacoraComponent },
  { path: '', redirectTo: '/marvel-heroes/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }