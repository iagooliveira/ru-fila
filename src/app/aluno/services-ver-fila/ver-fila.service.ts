import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VerFilaService {

  constructor(private http: HttpClient) { }

  getFilaDeAlunos(): any {
    return this.http.get(`http://${environment.URL_PC_REMOTO}:3005/aluno_fila`);
  }
}
