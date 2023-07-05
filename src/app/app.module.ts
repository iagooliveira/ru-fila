import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
// import { EntrarFilaComponent } from './entrar-fila/entrar-fila.component';
import { HomeComponent } from './home/home.component';
// import { FormCriaFuncionarioComponent } from './form-cria-funcionario/form-cria-funcionario.component';
// import { FormCriaAlunoComponent } from './form-cria-aluno/form-cria-aluno.component';
import { MenuComponent } from './home/menu/menu.component';
// import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
// import { RestauranteComponent } from './tela-inicial/restaurante/restaurante.component';
import { CadastrarAlunoComponent } from './aluno/cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarFuncionarioComponent } from './restaurante/cadastrar-funcionario/cadastrar-funcionario.component';
import { AlunoModule } from './aluno/aluno.module';
// import { EntrarFilaComponent } from './aluno/entrar-fila/entrar-fila.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // FormCriaFuncionarioComponent,
    // FormCriaAlunoComponent,
    MenuComponent,
    // TelaInicialComponent,
    // RestauranteComponent,
    // CadastrarAlunoComponent,
    // CadastrarFuncionarioComponent,
    // EntrarFilaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
