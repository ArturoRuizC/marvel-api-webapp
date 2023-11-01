import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  
  private  url = "http://localhost:8080/marvel";
  
  private headers = new HttpHeaders({
    Authorization: 'Basic' + btoa('admin:Bnb988omhj2')
  });

  constructor(private http:HttpClient) { 

  }

  listarHeroes(){
    return  this.http.get(`${this.url}/heroes`);
  }

  consultaHeroe(id: number) {
    return this.http.get(`${this.url}/heroes/${id}`);
  }

  bitacora() {
    return this.http.get(`${this.url}/bitacora`);
  }

}
