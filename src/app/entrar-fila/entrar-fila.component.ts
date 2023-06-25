import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrar-fila',
  templateUrl: './entrar-fila.component.html',
  styleUrls: ['./entrar-fila.component.css'],
})
export class EntrarFilaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }
}
