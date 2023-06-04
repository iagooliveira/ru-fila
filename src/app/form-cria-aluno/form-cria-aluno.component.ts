import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cria-aluno',
  templateUrl: './form-cria-aluno.component.html',
  styleUrls: ['./form-cria-aluno.component.css'],
})
export class FormCriaAlunoComponent implements OnInit {
  nomeAluno: string;
  matricula: number;

  constructor() {}

  ngOnInit(): void {}

  criaAluno(): void {
    console.log('teste');
  }
}
