import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtoApiUrl = 'http://127.0.0.1:8000/produtos'

  constructor(private http: HttpClient) { }

  mostrarProdutos() :Observable<Produto[]>{
    return this.http.get<Produto[]> (this.produtoApiUrl);
  }

  mostrarProdutosPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.produtoApiUrl}/${id}`);
  }

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.produtoApiUrl, produto)
  }

  atualizarProduto(produto: Produto, id:number): Observable<Produto> {
    const url = `${this.produtoApiUrl}/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  deletarProduto(id: number) {
    const url = `${this.produtoApiUrl}/${id}`;
    return this.http.delete<Produto>(url);
  }
}
