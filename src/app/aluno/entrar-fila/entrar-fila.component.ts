import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entrar-fila',
  templateUrl: './entrar-fila.component.html',
  styleUrls: ['./entrar-fila.component.css']
})
export class EntrarFilaComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
