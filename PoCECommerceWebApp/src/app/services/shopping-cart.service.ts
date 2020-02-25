import {Injectable} from '@angular/core';
import {Produto} from '../models/produto';
import {CarrinhoProduto} from '../models/carrinho-produto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  produtos: CarrinhoProduto[] = [];

  constructor() {
  }

  addProduto(produto: CarrinhoProduto) {
    produto.quantidade = 1;
    produto.valorTotal = produto.precoUnitario;
    this.produtos.push(produto);
  }

  getProdutos() {
    return this.produtos;
  }

  limparProdutos() {
    console.log(this.produtos);
    this.produtos = undefined;
    console.log(this.produtos);
  }

}
