import {Injectable} from '@angular/core';
import {ServiceCore} from './service-core';
import {Pedido} from '../models/pedido';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends ServiceCore<Pedido> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}pedido`);
  }

}
