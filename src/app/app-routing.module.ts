import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormCriaFuncionarioComponent } from './form-cria-funcionario/form-cria-funcionario.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { FormCriaAlunoComponent } from './form-cria-aluno/form-cria-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialComponent,
  },
  {
    path: 'cadastra-funcionario',
    component: FormCriaFuncionarioComponent,
  },
  {
    path: 'cadastra-aluno',
    component: FormCriaAlunoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
