import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRestauranteComponent } from './home-restaurante/home-restaurante.component';
import { DivulgarCardapioComponent } from './divulgar-cardapio/divulgar-cardapio.component';
import { CadastrarFuncionarioComponent } from './area-funcionario/cadastrar-funcionario/cadastrar-funcionario.component';
import { AreaFuncionarioComponent } from './area-funcionario/area-funcionario.component';
import { AreaRestauranteComponent } from './home-restaurante/area-restaurante/area-restaurante.component';
import { CadastrarRestauranteComponent } from './home-restaurante/area-restaurante/cadastrar-restaurante/cadastrar-restaurante.component';
import { VisualizarRestaurantesComponent } from './home-restaurante/area-restaurante/visualizar-restaurantes/visualizar-restaurantes.component';
import { VincularFuncionarioComponent } from './area-funcionario/vincular-funcionario/vincular-funcionario.component';
import { CadastrarPratoComponent } from './divulgar-cardapio/cadastrar-prato/cadastrar-prato.component';

const routes: Routes = [
  {
    path: 'home-restaurante',
    component: HomeRestauranteComponent,
  },
  {
    path: 'divulgar-cardapio',
    component: DivulgarCardapioComponent,
  },
  {
    path: 'cadastrar-prato',
    component: CadastrarPratoComponent,
  },
  {
    path: 'cadastrar-funcionario',
    component: CadastrarFuncionarioComponent,
  },
  {
    path: 'area-funcionario',
    component: AreaFuncionarioComponent,
  },
  {
    path: 'area-restaurante',
    component: AreaRestauranteComponent,
  },
  {
    path: 'cadastra-restaurante',
    component: CadastrarRestauranteComponent,
  },
  {
    path: 'visualizar-restaurantes',
    component: VisualizarRestaurantesComponent,
  },
  {
    path: 'vincular-funcionario',
    component: VincularFuncionarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteRoutingModule {}
