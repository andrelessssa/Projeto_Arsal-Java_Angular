import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // 👈 Essencial para a janela
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransporteDialogComponent } from '../transporte-dialog/transporte-dialog'; // 👈 O novo componente

@Component({
  selector: 'app-lista-devedores',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatPaginatorModule, 
    MatSelectModule, MatFormFieldModule, MatCheckboxModule,
    MatButtonModule, MatIconModule, MatDialogModule
  ],
  templateUrl: './lista-devedores.html',
  styleUrl: './lista-devedores.scss'
})
export class ListaDevedores {
  anos = [2023, 2024, 2025, 2026];
  anoSelecionado = 2024;
  meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  displayedColumns: string[] = ['id', 'nome', ...this.meses];
  
  // Iniciamos com alguns dados de exemplo da ARSAL 🏛️
  dataSource = new MatTableDataSource([
    { id: 1, nome: 'A AMARO DE MOURA TRANSPORTE - ME', pagamentos: {} },
    { id: 2, nome: 'A DE OLIVEIRA SANTOS TRANSPORTES ME', pagamentos: { 2024: { 'Set': true } } }
  ]);

  // Injetamos o serviço MatDialog no construtor
  constructor(public dialog: MatDialog) {}

  // 🚀 A função mágica para adicionar novos itens
  adicionarNovo(): void {
    const dialogRef = this.dialog.open(TransporteDialogComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(nomeRecebido => {
      // Se o utilizador digitou um nome e clicou em "Adicionar"
      if (nomeRecebido) {
        const proximoId = this.dataSource.data.length + 1; // Gera o ID automático 1, 2, 3...
        
        const novoTransporte = {
          id: proximoId,
          nome: nomeRecebido.toUpperCase(), // Padroniza para maiúsculas como na planilha 📝
          pagamentos: {} // Começa sem nenhum mês pago
        };

        // Atualiza a tabela com o novo item (estilo Imutável de ADS)
        this.dataSource.data = [...this.dataSource.data, novoTransporte];
        
        console.log(`Sucesso! ${nomeRecebido} adicionado à base da ARSAL.`);
      }
    });
  }

  inicializarAno(element: any) {
    if (!element.pagamentos[this.anoSelecionado]) {
      element.pagamentos[this.anoSelecionado] = {};
    }
    return element.pagamentos[this.anoSelecionado];
  }
  
}