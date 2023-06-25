import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDadosRestaurante } from 'src/app/Interfaces/tela-inicial/Restaurante/IDadosRestaurante';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
})
export class RestauranteComponent implements OnInit {
  constructor(private route: Router) {}

  @Input()
  dadosRestaurante: IDadosRestaurante;


  ngOnInit(): void {}

  redirecionaParaFila(idRestaurante: number): void {
    void this.route.navigate(['entrar-fila', idRestaurante]);
  }
}
