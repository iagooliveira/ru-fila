import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-restaurante',
  templateUrl: './home-restaurante.component.html',
  styleUrls: ['./home-restaurante.component.css'],
})
export class HomeRestauranteComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaDivulgaCardapio() {
    void this.route.navigate(['divulgar-cardapio']);
  }
}
