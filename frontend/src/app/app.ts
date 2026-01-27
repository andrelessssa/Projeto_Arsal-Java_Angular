import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',     // 🚨 ESSA LINHA DIZ: "Eu moro na tag <app-root>"
  standalone: true,        // 🚨 ESSA LINHA DIZ: "Eu sou independente"
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ], 
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // No Angular 17+ pode ser 'styleUrl' (singular), verifique qual você usa
})
export class AppComponent {
  title = 'frontend';
}