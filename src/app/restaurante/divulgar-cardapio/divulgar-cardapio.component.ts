import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-divulgar-cardapio',
  templateUrl: './divulgar-cardapio.component.html',
  styleUrls: ['./divulgar-cardapio.component.css'],
})
export class DivulgarCardapioComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private snackBar: MatSnackBar, private route: Router) {}

  ngOnInit(): void {}
  openSnackBar() {
    this.snackBar.open('Cardapio divulgado !', 'x', {
      duration: 6000,

      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  rotaHomeRestaurante() {
    this.openSnackBar();
    void this.route.navigate(['home-restaurante']);
  }
}
