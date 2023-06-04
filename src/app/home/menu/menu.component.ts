import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  rotaCriaFuncionario(): void {
    void this.route.navigate(['cadastra-funcionario']);
  }

  rotaCriaAluno(): void {
    void this.route.navigate(['cadastra-aluno']);
  }

  rotaTelaPrincipal(): void {
    void this.route.navigate(['']);
  }
}
