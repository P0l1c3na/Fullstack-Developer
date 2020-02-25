import {Component, OnInit} from '@angular/core';
import {PedidoService} from '../../../services/pedido.service';
import {ShoppingCartService} from '../../../services/shopping-cart.service';
import {Pedido} from '../../../models/pedido';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit {
  constructor(private pedidoService: PedidoService, private shoppingCartService: ShoppingCartService) {
  }

  valorTotal: number;
  frete: number;
  valorItens: number;
  pedido = new Pedido();


  ngOnInit() {
    this.pedido.numero = Math.floor(10000000 + Math.random() * 90000000);
  }

  onClienteSelecionado(cliente) {
    console.log(cliente);
    this.pedido.clienteCodigo = cliente.codigo;
  }

  onCarrinhoDeComprasPreenchido(produtos) {
    console.log(produtos);
  }

  limparCarrinho() {
    this.shoppingCartService.limparProdutos();
  }

}
