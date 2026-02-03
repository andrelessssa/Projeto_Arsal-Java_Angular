import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TransporteDialogComponent } from '../transporte-dialog/transporte-dialog';

// 1. A INTERFACE (O Contrato de Dados) 📑
// Define que pagamentos podem ter qualquer ano e qualquer mês
interface Transporte {
  id: number;
  nome: string;
  pagamentos: {
    [ano: number]: {
      [mes: string]: boolean;
    };
  };
}

@Component({
  selector: 'app-lista-devedores',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatTableModule, MatSelectModule, 
    MatFormFieldModule, MatCheckboxModule, MatButtonModule, 
    MatIconModule, MatDialogModule
  ],
  templateUrl: './lista-devedores.html',
  styleUrl: './lista-devedores.scss'
})
export class ListaDevedores {
  anosParaSelect = ['GERAL', 2023, 2024, 2025, 2026];
  anoSelecionado: any = 2024;
  meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  
  // 2. DATASOURCE TIPADO 🛡️
  dataSource = new MatTableDataSource<Transporte>([
    { 
      id: 1, 
      nome: 'A AMARO DE MOURA TRANSPORTE - ME', 
      pagamentos: { 2024: { 'Jan': true } } 
    },
    { 
      id: 2, 
      nome: 'A DE OLIVEIRA SANTOS TRANSPORTES ME', 
      pagamentos: { 2024: { 'Set': true } } 
    }
  ]);

  constructor(public dialog: MatDialog) {}

  // 📐 Gera as colunas dinamicamente para a visão Ano ou Geral
  get colunasVisiveis(): string[] {
    if (this.anoSelecionado === 'GERAL') {
      const cols = ['id', 'nome'];
      [2023, 2024, 2025, 2026].forEach(ano => {
        this.meses.forEach(mes => cols.push(`${mes}/${ano}`));
      });
      return cols;
    }
    return ['id', 'nome', ...this.meses];
  }

  // 🟢 Lê o status da bolinha
  getChecked(element: Transporte, col: string): boolean {
    if (this.anoSelecionado === 'GERAL') {
      const [mes, ano] = col.split('/');
      return element.pagamentos[Number(ano)]?.[mes] || false;
    }
    return element.pagamentos[this.anoSelecionado]?.[col] || false;
  }

  // ✍️ Salva a marcação no ano correto
  setChecked(element: Transporte, col: string, value: boolean) {
    const ano = this.anoSelecionado === 'GERAL' ? Number(col.split('/')[1]) : this.anoSelecionado;
    const mes = this.anoSelecionado === 'GERAL' ? col.split('/')[0] : col;

    if (!element.pagamentos[ano]) element.pagamentos[ano] = {};
    element.pagamentos[ano][mes] = value;
  }

  // 🚀 ADICIONAR NOVO COM TIPAGEM CORRETA
  adicionarNovo(): void {
    const dialogRef = this.dialog.open(TransporteDialogComponent, { width: '450px' });

    dialogRef.afterClosed().subscribe(nomeRecebido => {
      if (nomeRecebido) {
        // Criamos o objeto seguindo a Interface Transporte
        const novoTransporte: Transporte = { 
          id: this.dataSource.data.length + 1, 
          nome: nomeRecebido.toUpperCase(), 
          pagamentos: {} 
        };

        // Atualiza a tabela com o novo item
        this.dataSource.data = [...this.dataSource.data, novoTransporte];
      }
    });
  }
}