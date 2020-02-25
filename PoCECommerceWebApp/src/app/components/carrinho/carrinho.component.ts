import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Produto} from '../../models/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: Produto[] = [];
  valorTotal: number;
  quantidade = 1;

  constructor(protected shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.produtos = this.shoppingCartService.getProdutos();
  }

  onProdutoSelecionado(evento) {
    this.shoppingCartService.addProduto(evento.produto);
    console.log(evento);
  }

  onCalcularQuantidae(produto){
    this.valorTotal = this.quantidade * produto.valorUnitario;
  }


}
