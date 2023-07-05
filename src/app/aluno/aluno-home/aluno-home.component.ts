import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-home',
  templateUrl: './aluno-home.component.html',
  styleUrls: ['./aluno-home.component.css']
})
export class AlunoHomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  rotaFilaAluno(): void {
    void this.route.navigate(['entrar-fila']);
  }
}
