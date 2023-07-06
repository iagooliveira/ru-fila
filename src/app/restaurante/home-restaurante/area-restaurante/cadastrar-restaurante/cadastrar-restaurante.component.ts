import { Component, OnInit } from '@angular/core';
import { CadastrarRestauranteService } from '../services/cadastrar-restaurante/cadastrar-restaurante.service';

@Component({
  selector: 'app-cadastrar-restaurante',
  templateUrl: './cadastrar-restaurante.component.html',
  styleUrls: ['./cadastrar-restaurante.component.css'],
})
export class CadastrarRestauranteComponent implements OnInit {
  nome: string;
  constructor(
    private cadastrarRestauranteService: CadastrarRestauranteService
  ) {}

  ngOnInit(): void {}

  onCadastraRestaurante(nome: string) {
    this.cadastrarRestauranteService
      .cadastraRestaurante(nome)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
