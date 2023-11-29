import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.component.html',
  styleUrl: './atualizar-produto.component.css'
})
export class AtualizarProdutoComponent implements OnInit {

  id!: string;
  produto: Produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  
  this.produtoService.mostrarProdutosPorId(this.id).subscribe(
    data => {
      this.produto = data;
    },
    error => console.log(error)
  );
  }

  onSubmit() {
    this.produtoService.atualizarProduto(this.produto,this.id).subscribe(
      data => {
        this.listaProdutos();
      },
      error => console.log(error)
      );
  }
  listaProdutos() {
    this.router.navigate(['/produtos'])
  }
}
