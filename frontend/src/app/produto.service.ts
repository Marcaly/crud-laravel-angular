import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private apiUrl = 'http://127.0.0.1:8000/produtos';

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<any> {
    return this.http.get(this.apiUrl)
  }

  obterDetalhesProduto(id:number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  adicionarProduto(produto:any): Observable<any> {
    return this.http.post(this.apiUrl, produto)
  }

  editarProduto(id:number, produto:any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, produto)
  }

  excluirProduto(id:number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
