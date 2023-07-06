import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CardapioComponent } from '../cardapio/cardapio.component';

@Component({
  selector: 'app-entrar-fila',
  templateUrl: './entrar-fila.component.html',
  styleUrls: ['./entrar-fila.component.css'],
})
export class EntrarFilaComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(private route: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  rotaSairFila(): void {
    void this.route.navigate(['home']);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CardapioComponent, {
      data: {
        animal: 'panda',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // aqui pega a resposta do dialog
    });
  }
}
