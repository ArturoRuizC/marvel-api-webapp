import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';
import { Modal } from 'bootstrap';
import { ComicsItem, EventoItem, Heroe, HistoriasItem, SeriesItem, Thumbnail, Urls } from '../interfaces/heroe.interface';
import { Router } from '@angular/router';

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
  idHeroe!: any;

  ltsItems: EventoItem[] = [];
  ltsSeriesItem: SeriesItem[] = [];
  ltsHistoriasItem: HistoriasItem[] = [];
  ltsComicsItem: ComicsItem[] = []
  ltsUrls: Urls[] = [];

  constructor(
    private marvelService: MarvelApiService, 
    private router: Router
    ) {
  
    this.urlImagen = {
      path: '',
      extension: ''
    }

    this.objHeroe = {
      name: '',
      description: '',
      modified: '',
      thumbnail: this.urlImagen,
    };

    this.heroeEmpty = {
      name: '',
      description: '',
      modified: '',
      thumbnail: this.urlImagen,

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
      console.log(this.objHeroe);
      if (this.objHeroe.description == '') {
        this.objHeroe.description = 'Description not available'
      }
      this.ltsItems = this.wrapper.data.results[0].events.items;
      this.ltsSeriesItem = this.wrapper.data.results[0].series.items;
      this.ltsHistoriasItem = this.wrapper.data.results[0].stories.items;
      this.ltsComicsItem = this.wrapper.data.results[0].comics.items;
      this.ltsUrls = this.wrapper.data.results[0].urls;

      console.log(this.ltsItems);
      const modal = new Modal(this.heroModal.nativeElement);
      modal.show();
    });
  }

}