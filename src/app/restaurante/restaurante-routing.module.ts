import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRestauranteComponent } from './home-restaurante/home-restaurante.component';
import { DivulgarCardapioComponent } from './divulgar-cardapio/divulgar-cardapio.component';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';


const routes: Routes = [
  {
    path: 'home-restaurante',
    component: HomeRestauranteComponent
  },
  {
    path: 'divulgar-cardapio',
    component: DivulgarCardapioComponent
  },
  {
    path: 'cadastrar-funcionario',
    component: CadastrarFuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
