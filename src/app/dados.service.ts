import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Carro {
  id: number;
  nome: string;
  marca: string;
  placa: string;
  valorLocacao: number;
}

export interface Cliente {
  id: number;
  nome: string;
  documento: string;
}

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private carros: Carro[] = [];
  private clientes: Cliente[] = [];

  private carrosSubject = new Subject<Carro[]>();
  private clientesSubject = new Subject<Cliente[]>();

  carros$ = this.carrosSubject.asObservable();
  clientes$ = this.clientesSubject.asObservable();

  getCarros() {
    return this.carros;
  }

  getClientes() {
    return this.clientes;
  }

  adicionarCarro(carro: Carro) {
    this.carros.push(carro);
    this.carrosSubject.next(this.carros);
  }

  adicionarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
    this.clientesSubject.next(this.clientes);
  }
}
