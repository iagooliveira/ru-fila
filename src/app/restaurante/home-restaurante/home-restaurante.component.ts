import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-restaurante',
  templateUrl: './home-restaurante.component.html',
  styleUrls: ['./home-restaurante.component.css'],
})
export class HomeRestauranteComponent implements OnInit {
  constructor(private route: Router) {}
  rotaVoltar = 'aluno-home';
  // rota para o restaurante home-resutaurente, só olhar o no restaurente routing, o nome da pasta vai ser a rota
  ngOnInit(): void {}

  rotaDivulgaCardapio() {
    void this.route.navigate(['divulgar-cardapio']);
  }

  rotaAreaFuncionario() {
    void this.route.navigate(['area-funcionario']);
  }

  rotaAreaRestaurante() {
    void this.route.navigate(['area-restaurante']);
  }
}
