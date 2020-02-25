import {Injectable} from '@angular/core';
import {Produto} from '../models/produto';
import {CarrinhoProduto} from '../models/carrinho-produto';
import {Observable} from 'rxjs';
import {CarrinhoValores} from "../models/carrinho-valores";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  produtos: CarrinhoProduto[] = [];
  produtosSelecionados: CarrinhoValores[] = [];

  constructor() {
  }

  addProduto(produto: CarrinhoProduto) {
    produto.quantidade = 1;
    produto.valorTotal = produto.precoUnitario;
    if (!this.produtos.find(x => x.codigo === produto.codigo)) {
      this.produtos.push(produto);
    }
  }

  getProdutos() {
    return new Observable<CarrinhoProduto[]>(observador => {
      setTimeout(() => {
        observador.next(this.produtos);
      }, 2000);
    });
  }

  limparProdutos() {
    console.log(this.produtos);
    this.produtos = [];
    console.log(this.produtos);
  }

  getProdutosSelecionados() {
    return new Observable<CarrinhoValores[]>(observador => {
      setTimeout(() => {
        observador.next(this.produtosSelecionados);
      }, 2000);
    });
  }

  setProdutosSelecionados(produtosSelecionados: CarrinhoValores[]) {
    this.produtosSelecionados = produtosSelecionados;
  }

}
