import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ListaDevedores } from './lista-devedores/lista-devedores'; 

@Component({
  selector: 'app-root',
  standalone: true, 
    imports: [ CommonModule, ListaDevedores ], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'frontend';
}