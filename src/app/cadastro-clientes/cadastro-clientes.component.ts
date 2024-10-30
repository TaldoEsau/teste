import { Component } from '@angular/core';
import { DadosService, Cliente } from '../dados.service';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent {
  novoCliente: Cliente = {
    id: 0,
    nome: '',
    documento: ''
  };

  constructor(private dadosService: DadosService) {}

  cadastrarCliente() {
    const novoId = this.dadosService.getClientes().length + 1;
    const clienteParaCadastrar = { ...this.novoCliente, id: novoId };
    this.dadosService.adicionarCliente(clienteParaCadastrar);
    this.novoCliente = { id: 0, nome: '', documento: '' };
    alert('Cliente cadastrado com sucesso!');
  }
}
