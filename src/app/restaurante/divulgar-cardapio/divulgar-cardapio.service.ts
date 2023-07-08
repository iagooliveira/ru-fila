import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DivulgarCardapioService {

  constructor(private http: HttpClient) {}

  cadastraPrato(principal: string, salada: string, guarnicao: string, suco: string, sobremesa: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_REQ}:3005/pratos`, {
        principal: principal, 
        salada: salada,
        carne: guarnicao, 
        suco: suco,
        sobremesa: sobremesa
    });
  }

  cadastraCardapio(restauranteCodigo: number, data: string): Observable<any> {
    return this.http.post<any>(`http://${environment.URL_REQ}:3005/cardapios`, {
      restauranteCodigo: restauranteCodigo,
      dataCardapio: data
    });
  }

}
