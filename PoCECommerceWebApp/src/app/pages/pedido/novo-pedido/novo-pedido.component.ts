import {AfterContentInit, Component, OnChanges, OnInit} from '@angular/core';
import {PedidoService} from '../../../services/pedido.service';
import {ShoppingCartService} from '../../../services/shopping-cart.service';
import {Pedido} from '../../../models/pedido';
import {CarrinhoValores} from '../../../models/carrinho-valores';
import {CalculoFreteService} from '../../../services/calculo-frete.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-novo-pedido',
  templateUrl: './novo-pedido.component.html',
  styleUrls: ['./novo-pedido.component.css']
})
export class NovoPedidoComponent implements OnInit, AfterContentInit, OnChanges {
  constructor(private pedidoService: PedidoService,
              private shoppingCartService: ShoppingCartService,
              private  calculoFreteService: CalculoFreteService,
              private router: Router
  ) {
  }

  valorTotal: any;
  valorItens: number;
  pedido = new Pedido();
  produtos: CarrinhoValores[] = [];

  erro = false;


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


    this.calculoFreteService.calcularFrete({totalItens}).subscribe(
      value => {
        this.pedido.valorFrete = Number(value);
        this.pedido.valorTotal = Number(valorTotal) + Number(this.pedido.valorFrete);
        this.pedido.qtdItens = totalItens;
      }
    );
    this.valorItens = valorTotal;
    this.valorTotal = valorTotal + this.pedido.valorFrete;

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
    if (this.pedido.cliente) {
      this.pedidoService.save(this.pedido).subscribe(dados => console.log(dados));
      this.router.navigate(['/consulta-pedido']);
    } else {
      this.erro = true;
    }
  }


}
