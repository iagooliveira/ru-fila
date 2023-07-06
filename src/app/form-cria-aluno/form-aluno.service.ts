import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormAlunoService {

  constructor(
    private http:HttpClient
  ) { }
  
 
  criarAluno(matricula: string): Observable<any> {
    return this.http.post<any>('http://192.168.15.11:3005/alunos', {matricula:matricula});
  }


}
