import {Injectable} from '@angular/core';
import {Produto} from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  produtos: Produto[] = []

  constructor() {
  }

  addProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  getProdutos() {
    return this.produtos;
  }

}
