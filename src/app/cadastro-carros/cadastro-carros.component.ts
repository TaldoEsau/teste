import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-carros',
  templateUrl: './cadastro-carros.component.html',
  styleUrls: ['./cadastro-carros.component.css']
})
export class CadastroCarrosComponent {
  novoCarro = {
    nome: '',
    marca: '',
    placa: '',
    valorLocacao: 0
  };
}
