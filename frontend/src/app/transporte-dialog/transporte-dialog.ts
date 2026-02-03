import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transporte-dialog',
  standalone: true,
  imports: [
    CommonModule, MatDialogModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, FormsModule
  ],
  template: `
    <h1 mat-dialog-title>Novo Cadastro ARSAL</h1>
    <div mat-dialog-content>
      <p>Informe o nome da nova empresa de transporte:</p>
      <mat-form-field appearance="outline" class="full-width">
        <mat-label>Nome/Razão Social</mat-label>
        <input matInput [(ngModel)]="nomeTransporte" placeholder="Ex: A AMARO DE MOURA">
      </mat-form-field>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">Cancelar</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="nomeTransporte" [disabled]="!nomeTransporte">
        Adicionar
      </button>
    </div>
  `,
  styles: `.full-width { width: 100%; margin-top: 10px; }`
})
export class TransporteDialogComponent {
  nomeTransporte: string = "";

  constructor(public dialogRef: MatDialogRef<TransporteDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}