import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-lista-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produtos.component.html',
  styleUrl: './lista-produtos.component.css'
})
export class ListaProdutosComponent implements OnInit{
  produtos:any[] =[]

  constructor(private produtoService: ProdutoService){}

  ngOnInit() {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe(
      data => {
        this.produtos = data;
      },
      error => {
        console.error(error)
      }
    )
  }
}
