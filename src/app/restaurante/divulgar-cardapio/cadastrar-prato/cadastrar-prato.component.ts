import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DivulgarCardapioService } from '../divulgar-cardapio.service';

@Component({
  selector: 'app-cadastrar-prato',
  templateUrl: './cadastrar-prato.component.html',
  styleUrls: ['./cadastrar-prato.component.css']
})
export class CadastrarPratoComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  toppings = new FormControl();
  principal: string;
  salada: string;
  guarnicao: string;
  suco: string;
  sobremesa: string;

  rotaVoltar = 'home-restaurante';

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private snackBar: MatSnackBar, private route: Router, private divulgarCardapioService: DivulgarCardapioService) {}

  ngOnInit(): void {}
  openSnackBar() {
    this.snackBar.open('Cardapio divulgado !', 'x', {
      duration: 6000,

      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onCadastraPrato(principal: string, salada: string, guarnicao: string, suco: string, sobremesa: string) {
    this.divulgarCardapioService
      .cadastraPrato(principal, salada, guarnicao, suco, sobremesa)
      .subscribe((res) => {
        console.log(res);
        this.snackBar.open('Prato cadastrado com sucesso !', 'x', {
          duration: 6000,
    
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        void this.route.navigate(['divulgar-cardapio']);
      });
  }
}
