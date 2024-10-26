import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent {
  novoCliente = {
    nome: '',
    documento: ''
  };
}
