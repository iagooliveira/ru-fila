import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IntegracaoBackendService {
  constructor(private httpClient: HttpClient) {}
  rotaIntegracao = ' http://192.168.15.11:3005';

  async divulgaCardapio(params) {
    await this.httpClient.post<any[]>(`${this.rotaIntegracao}/aluno`, params);
  }
}
