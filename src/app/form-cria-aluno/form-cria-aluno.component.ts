import { Component, OnInit } from '@angular/core';
import { FormAlunoService } from './form-aluno.service';

@Component({
  selector: 'app-form-cria-aluno',
  templateUrl: './form-cria-aluno.component.html',
  styleUrls: ['./form-cria-aluno.component.css'],
})
export class FormCriaAlunoComponent implements OnInit {
  nomeAluno: string;
  matricula: number;

  constructor(private alunoService:FormAlunoService) {}

  ngOnInit(): void {}

  criaAluno(): void {
    this.alunoService.criarAluno('aaaaaaaaaaaaaaaaaaaa').subscribe(()=> {
      console.log('teste')
    } )
  }
}
