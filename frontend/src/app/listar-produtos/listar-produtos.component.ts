import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css'
})
export class ListarProdutosComponent {
  produtos!: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarProdutos();
  }
  private buscarProdutos() {
    this.produtoService.mostrarProdutos().subscribe((data) => {
      this.produtos = data
    });
  }

  detalhesDoProduto(id: string) {
    this.router.navigate(['detalhes-produto', id]);
  }

  atualizarProduto(id: string) {
    this.router.navigate(['atualizar-produto', id]);
  }
  
  deletarProduto(id: string) {
    this.produtoService.deletarProduto(id).subscribe(
      data => {
        console.log(`Produto com ID ${id} excluído com sucesso.`);
        this.buscarProdutos();
      },
      (error) => {
        console.error(`Erro ao excluir produto: ${error}`);
      }
    );
  }
}
