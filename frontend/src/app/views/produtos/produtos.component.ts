import { Component, OnInit } from '@angular/core';
import Produto from '../../models/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{

  produtos:Produto[] = [{
    id:1,
    nome_produto:'Batata',
    categoria_id: 2,
    valor_produto: 5.7,
    data_vencimento: new Date(14/12/2000),
    quantidade_estoque: 2,
    produto_perecivel: true
    

  }]
  displayedColumns: string[] = ['nome_produto', 'categoria_id', 'valor_produto', 'data_vencimento', 'quantidade_estoque', 'produto_perecivel', 'acoes' ]

  constructor() {}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  atualizarProduto(produto: Produto) {

  }

  deletarProduto(id:number){}

}
