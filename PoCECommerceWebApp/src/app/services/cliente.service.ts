import {Injectable} from '@angular/core';
import {ServiceCore} from './service-core';
import {Cliente} from '../models/cliente';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ServiceCore<Cliente> {

  constructor(public httpClient: HttpClient) {
    super(httpClient,  `${environment.api_url}cliente`);
  }
}
