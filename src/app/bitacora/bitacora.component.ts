import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/service/marvel-api.service';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit{

ltsBitacora: any;

constructor(private marvelService: MarvelApiService){
}
  ngOnInit(): void {
   this.marvelService.bitacora().subscribe(e => {this.ltsBitacora = e});
  }

}
