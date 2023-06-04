import { Component, Input, OnInit } from '@angular/core';
import { IDadosRestaurante } from 'src/app/Interfaces/tela-inicial/Restaurante/IDadosRestaurante';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
})
export class RestauranteComponent implements OnInit {
  @Input()
  dadosRestaurante: IDadosRestaurante;

  constructor() {}

  ngOnInit(): void {}
}
