import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {CarrinhoProduto} from '../../models/carrinho-produto';
import {CarrinhoValores} from '../../models/carrinho-valores';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: CarrinhoProduto[] = [];
  valorTotal = new CarrinhoValores();
  produtosComValorCalculado: CarrinhoValores[] = [];

  @Output() carrinhoDeCompras = new EventEmitter();

  constructor(protected shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCartService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Dados carregados');
      }
    );
    this.valorTotal.valorTotalDeItens = 0;
    this.valorTotal.quantidadeTotalDeItens = 0;
  }

  onProdutoSelecionado(evento) {
    this.shoppingCartService.addProduto(evento.produto);
    console.log(evento);
  }

  onProdutoCalculado(valores) {
    if (this.produtosComValorCalculado.length === 0) {
      this.adicionarProduto(valores);
    } else {
      const valor = this.produtosComValorCalculado.find(x => x.codigoProduto === valores.codigo);
      if (valor !== undefined) {
        const newList = this.produtosComValorCalculado.filter(x => x.codigoProduto !== valor.codigoProduto);
        this.produtosComValorCalculado = newList;
        this.adicionarProduto(valores);
      } else {
        this.adicionarProduto(valores);
      }
    }
  }

  adicionarProduto(valores) {
    const valorTotal = new CarrinhoValores();
    valorTotal.codigoProduto = valores.codigo;
    valorTotal.valorTotalDeItens = Number(valores.valorTotal);
    valorTotal.quantidadeTotalDeItens = Number(valores.quantidade);
    this.produtosComValorCalculado.push(valorTotal);
    console.log(this.produtosComValorCalculado);
    this.carrinhoDeCompras.emit({carrinho: this.produtosComValorCalculado});
    this.shoppingCartService.setProdutosSelecionados(this.produtosComValorCalculado);
  }

}
