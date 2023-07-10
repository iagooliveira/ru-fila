import { Component, OnInit } from '@angular/core';
import { VerFilaService } from '../../services-ver-fila/ver-fila.service';

@Component({
  selector: 'app-ver-fila',
  templateUrl: './ver-fila.component.html',
  styleUrls: ['./ver-fila.component.css']
})
export class VerFilaComponent implements OnInit {
listaDeFilas: any[] = []
rotaVoltar = 'entrar-fila'
  constructor(private verFilaService: VerFilaService) { }

  ngOnInit(): void {
    this.verFilaService.getFilaDeAlunos().subscribe(
      (dados) => {
        this.listaDeFilas = dados.data
        console.log(this.listaDeFilas)
      }
    )
  }

}
