import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-api-webapp';

  constructor(private router: Router){
  }

  goToBitacora(): any {
    this.router.navigate(['bitacora']);
  }

  goToHeroes(): any {
    this.router.navigate(['marvel-heroes/heroes']);
  }
}