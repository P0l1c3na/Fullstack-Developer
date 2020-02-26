import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {PedidoService} from '../../../services/pedido.service';
import {ShoppingCartService} from '../../../services/shopping-cart.service';
import {Pedido} from '../../../models/pedido';
import {CarrinhoValores} from '../../../models/carrinho-valores';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit, AfterContentInit, OnChanges {
  constructor(private pedidoService: PedidoService,
              private shoppingCartService: ShoppingCartService
  ) {
  }

  valorTotal: any;
  frete: number;
  valorItens: number;
  pedido = new Pedido();
  produtos: CarrinhoValores[] = [];


  ngOnInit() {
    this.pedido.numero = Math.floor(10000000 + Math.random() * 90000000);
  }

  onClienteSelecionado(clienteSelecionado) {
    console.log(clienteSelecionado.cliente);
    this.pedido.cliente = clienteSelecionado.cliente;
  }

  onCarrinhoDeComprasPreenchido(produtosCarrinho) {
    this.produtos = produtosCarrinho.carrinho;
    this.calcularPrecoTotal(this.produtos);
  }

  calcularPrecoTotal(produtos: CarrinhoValores[]) {
    let valorTotal = 0;
    let totalItens = 0
    this.shoppingCartService.getProdutosSelecionados().subscribe(valor => {
      produtos = valor;
    });
    produtos.forEach(valor => {
      valorTotal += Number(valor.valorTotalDeItens);
      totalItens += Number(valor.quantidadeTotalDeItens);
    });
    this.valorItens = valorTotal;
    this.valorTotal = valorTotal;

    this.pedido.qtdItens = totalItens;
    this.pedido.valorTotal = valorTotal;
    this.pedido.valorFrete = 0;

    console.log('Valor TOtal: ' + this.valorTotal);
  }

  limparCarrinho() {
    this.shoppingCartService.limparProdutos();
  }

  ngOnChanges() {
    console.log('Context' + this);
  }


  ngAfterContentInit(): void {
    setTimeout(() => {
      this.calcularPrecoTotal(this.produtos);
    }, 0);
  }

  finalizarPedido() {
    console.log(this.pedido);
    this.pedidoService.save(this.pedido).subscribe(dados => console.log(dados));
  }


}
