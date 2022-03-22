import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiURL } from 'src/constants';
import { Observable } from 'rxjs';
import { Produto } from './models/produto';
import { Carrinho } from './models/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }

  public getProdutos(categoria: string): Observable<Carrinho> {
    return this.http.get<Carrinho>(apiURL + "/produtos/"+categoria);
  }
}
