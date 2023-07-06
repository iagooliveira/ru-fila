import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizarRestaurantesService {

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get('http://192.168.15.11:3005/restaurantes');
  }
  
}
