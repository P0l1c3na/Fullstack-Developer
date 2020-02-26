import {Cliente} from './cliente';

export class Pedido {
  numero: number;
  qtdItens: number;
  valorFrete: number;
  valorTotal: number;
  cliente: Cliente;
}
