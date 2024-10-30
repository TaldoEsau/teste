import { Component } from '@angular/core';
import { DadosService, Carro } from '../dados.service';

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent {
  novoCarro: Carro = {
    id: 0,
    nome: '',
    marca: '',
    placa: '',
    valorLocacao: 0
  };

  constructor(private dadosService: DadosService) {}

  cadastrarCarro() {
    const novoId = this.dadosService.getCarros().length + 1;
    const carroParaCadastrar = { ...this.novoCarro, id: novoId };
    this.dadosService.adicionarCarro(carroParaCadastrar);
    this.novoCarro = { id: 0, nome: '', marca: '', placa: '', valorLocacao: 0 };
    alert('Carro cadastrado com sucesso!');
  }
}
