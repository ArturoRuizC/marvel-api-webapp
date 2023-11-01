import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { Modal } from 'bootstrap';
import { Heroe } from '../interfaces/heroe.interface';
import { Thumbnail } from '../interfaces/thumbnail.interfaces';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent  implements OnInit {

  @ViewChild('heroModal', { static: false })
  heroModal!: ElementRef;
  wrapper:any;
  ltsHeroes: any[] = []; 
  objHeroe!: Heroe;
  heroeEmpty!: Heroe;
  urlImagen!: Thumbnail;
  constructor(private marvelService: MarvelApiService) {
  
    this.urlImagen = {
      path: '',
      extension: ''
    }

    this.objHeroe = {
      name: '',
      description: '',
      modified: '',
      thumbnail: this.urlImagen

    };

    this.heroeEmpty = {
      name: '',
      description: '',
      modified: '',
      thumbnail: this.urlImagen

    };

  }

  ngOnInit(): void {
    this.marvelService.listarHeroes().subscribe(e => { this.wrapper = e 
      this.ltsHeroes = this.wrapper.data.results
    });
  }

  heroeById(id: number): void {
    this.objHeroe = this.heroeEmpty;
    this.marvelService.consultaHeroe(id).subscribe(e => {this.wrapper = e 
      this.objHeroe = this.wrapper.data.results[0];
      
      if (this.objHeroe.description == '') {
        this.objHeroe.description = 'Descripcion no disponible'
      }
      
      console.log(this.objHeroe.name);
      const modal = new Modal(this.heroModal.nativeElement);
      modal.show();
    });
  }
}