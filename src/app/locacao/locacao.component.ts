import { Component } from '@angular/core';

interface Carro {
  id: number;
  nome: string;
  marca: string;
  placa: string;
  valorLocacao: number;
}

interface Cliente {
  id: number;
  nome: string;
  documento: string;
}

interface Locacao {
  cliente: Cliente;
  carro: Carro;
  dias: number;
  valorTotal: number;
}

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent {
  carros: Carro[] = [
    { id: 1, nome: 'Carro A', marca: 'Marca A', placa: 'ABC-1234', valorLocacao: 100 },
    { id: 2, nome: 'Carro B', marca: 'Marca B', placa: 'XYZ-5678', valorLocacao: 150 }
  ];

  clientes: Cliente[] = [
    { id: 1, nome: 'Cliente A', documento: '123.456.789-00' },
    { id: 2, nome: 'Cliente B', documento: '987.654.321-00' }
  ];

  locacao: Locacao = {
    cliente: this.clientes[0],
    carro: this.carros[0],
    dias: 1,
    valorTotal: 0
  };

  locacoesRegistradas: Locacao[] = [];

  calcularValorTotal(): void {
    this.locacao.valorTotal = this.locacao.dias * this.locacao.carro.valorLocacao;
  }

  registrarLocacao(): void {
    this.calcularValorTotal();
    this.locacoesRegistradas.push({ ...this.locacao });
    alert(`Locação registrada: ${this.locacao.cliente.nome} alugou ${this.locacao.carro.nome} por ${this.locacao.dias} dias. Valor total: R$${this.locacao.valorTotal}`);
    
    this.locacao = {
      cliente: this.clientes[0],
      carro: this.carros[0],
      dias: 1,
      valorTotal: 0
    };
  }
}
