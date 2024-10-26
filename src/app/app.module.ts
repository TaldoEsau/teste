import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroCarrosComponent } from './cadastro-carros/cadastro-carros.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { LocacaoComponent } from './locacao/locacao.component';

const routes: Routes = [
  { path: 'cadastro-carros', component: CadastroCarrosComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'locacao', component: LocacaoComponent },
  { path: '', redirectTo: '/cadastro-carros', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroCarrosComponent,
    CadastroClientesComponent,
    LocacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
