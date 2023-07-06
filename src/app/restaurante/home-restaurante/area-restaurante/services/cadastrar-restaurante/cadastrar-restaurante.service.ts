import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastrarRestauranteService {
  constructor(private http: HttpClient) {}

  cadastraRestaurante(nome: string): Observable<any> {
    return this.http.post<any>('http://192.168.15.11:3005/restaurantes', {
      nome: nome,
    });
  }
}
