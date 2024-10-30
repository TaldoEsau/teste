import { Component, OnInit } from '@angular/core';
import { DadosService, Carro, Cliente } from '../dados.service';

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
export class LocacaoComponent implements OnInit {
  carros: Carro[] = [];
  clientes: Cliente[] = [];
  locacao: Locacao = {
    cliente: {} as Cliente,
    carro: {} as Carro,
    dias: 1,
    valorTotal: 0
  };
  locacoesRegistradas: Locacao[] = [];

  constructor(private dadosService: DadosService) {}

  ngOnInit(): void {
    this.carros = this.dadosService.getCarros();
    this.clientes = this.dadosService.getClientes();

    this.dadosService.carros$.subscribe((carros) => this.carros = carros);
    this.dadosService.clientes$.subscribe((clientes) => this.clientes = clientes);

    this.locacao.cliente = this.clientes[0];
    this.locacao.carro = this.carros[0];
  }

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
