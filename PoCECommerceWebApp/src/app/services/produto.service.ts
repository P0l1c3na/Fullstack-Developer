import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ServiceCore} from './service-core';
import {Produto} from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends ServiceCore<Produto> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}produto`);
  }
}
