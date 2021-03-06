import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NovoPedidoComponent} from './pages/pedido/novo-pedido/novo-pedido.component';
import {ConsultaPedidoComponent} from './pages/pedido/consulta-pedido/consulta-pedido.component';
import {RouterModule, Routes} from '@angular/router';
import {CadastroClienteComponent} from './pages/cadastro/cadastro-cliente/cadastro-cliente.component';
import {CadastroProdutoComponent} from './pages/cadastro/cadastro-produto/cadastro-produto.component';

const appRoutes: Routes = [
  { path: 'novo-pedido', component:  NovoPedidoComponent },
  { path: 'consulta-pedido', component:  ConsultaPedidoComponent },
  { path: 'cadastro-cliente', component:  CadastroClienteComponent },
  { path: 'cadastro-produto', component:  CadastroProdutoComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
