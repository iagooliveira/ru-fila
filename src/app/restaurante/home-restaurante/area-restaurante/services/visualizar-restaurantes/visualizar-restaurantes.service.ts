import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisualizarRestaurantesService {
  restauranteCodigo:number;
  funcionarioCodigo: number;
  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get('http://192.168.15.11:3005/restaurantes');
  }
  
  vinculaFuncionarioRestaurante(restauranteCodigo: number, funcionarioCodigo: number): Observable<any> {
    return this.http.post<any>('http://192.168.15.11:3005/funcionario_restaurante', {restauranteCodigo: restauranteCodigo, funcionarioCodigo: funcionarioCodigo});
}

}