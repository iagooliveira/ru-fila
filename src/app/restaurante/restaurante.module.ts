import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivulgarCardapioComponent } from './divulgar-cardapio/divulgar-cardapio.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { HomeRestauranteComponent } from './home-restaurante/home-restaurante.component';
import { RestauranteRoutingModule } from './restaurante-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';


@NgModule({
  declarations: [
    DivulgarCardapioComponent,
    HomeRestauranteComponent,
     CadastrarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule,

    BrowserModule,
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
    MatFormFieldModule,
    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule, 
  ]
})
export class RestauranteModule { }