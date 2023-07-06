import { Component, OnInit } from '@angular/core';
import { CadastrarRestauranteService } from '../services/cadastrar-restaurante/cadastrar-restaurante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrls: ['./cadastrar-restaurante.component.css'],
})
export class CadastrarRestauranteComponent implements OnInit {
  nome: string;
  constructor(
    private cadastrarRestauranteService: CadastrarRestauranteService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  onCadastraRestaurante(nome: string) {
    this.cadastrarRestauranteService
      .cadastraRestaurante(nome)
      .subscribe((res) => {
        console.log(res);
      });
  }

  voltar() {
    void this.route.navigate(['area-restaurante']);
  }
}
