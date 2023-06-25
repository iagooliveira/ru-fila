import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cria-funcionario',
  templateUrl: './form-cria-funcionario.component.html',
  styleUrls: ['./form-cria-funcionario.component.css']
})
export class FormCriaFuncionarioComponent implements OnInit {

  nomeFuncionario: string;
  codigo: number;

  constructor() {}

  ngOnInit(): void {}

  criaFuncionario(): void {
    console.log('teste');
  }

}
