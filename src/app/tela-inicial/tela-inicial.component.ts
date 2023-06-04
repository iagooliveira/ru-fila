import { Component, OnInit } from '@angular/core';
import { IDadosRestaurante } from '../Interfaces/tela-inicial/Restaurante/IDadosRestaurante';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css'],
})
export class TelaInicialComponent implements OnInit {
  resDadosRestaurante: IDadosRestaurante = {
    nome: 'RU Ondia',
    localizacao: 'Ondina',
  };

  constructor() {}

  ngOnInit(): void {}
}
