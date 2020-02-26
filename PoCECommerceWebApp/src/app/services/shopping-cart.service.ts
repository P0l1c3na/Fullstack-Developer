import {Injectable} from '@angular/core';
import {CarrinhoProduto} from '../models/carrinho-produto';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {CarrinhoValores} from '../models/carrinho-valores';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  produtos: CarrinhoProduto[] = [];
  produtosSelecionados: CarrinhoValores[] = [];

  keyStorage: any = 'produtos_carrinho';

  private produtosSubject: BehaviorSubject<CarrinhoProduto[]>;

  constructor() {
    const produtosSalvos: CarrinhoProduto[] = JSON.parse(localStorage.getItem(this.keyStorage)) || [];
    this.produtosSubject = new BehaviorSubject<CarrinhoProduto[]>(produtosSalvos);

    this.produtosSubject.subscribe((produtos) => {
      localStorage.setItem(this.keyStorage, JSON.stringify(produtos));
    });
  }

  addProduto(produto: CarrinhoProduto) {
    produto.quantidade = 1;
    produto.valorTotal = produto.precoUnitario;
    if (!this.produtos.find(x => x.codigo === produto.codigo)) {
      this.produtos.push(produto);
      this.produtosSubject.next(this.produtos);
    }
  }

  getProdutos() {
    return this.produtosSubject.asObservable();
  }

  limparProdutos() {
    this.produtos = [];
    this.produtosSubject.next(this.produtos);
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
