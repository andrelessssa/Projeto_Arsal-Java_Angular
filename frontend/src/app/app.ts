import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ListaDevedores } from './lista-devedores/lista-devedores';
import { Relatorio } from './relatorio/relatorio';
import { Login } from './login/login';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ListaDevedores,
    Relatorio,
    Login

  ], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'frontend';
  telaAtual: string = 'inicio'; 

  // 🚨 ADICIONE ESTA FUNÇÃO AQUI:
  log(mensagem: string) {
    console.log(mensagem);
  }

  mudarTela(nome: string) {
    this.telaAtual = nome;
    console.log('Tela atual agora é:', this.telaAtual);
  }

  voltarInicio() {
    this.telaAtual = 'inicio';
  }

  mostrarLista() {
    this.telaAtual = 'devedores';
  }

}