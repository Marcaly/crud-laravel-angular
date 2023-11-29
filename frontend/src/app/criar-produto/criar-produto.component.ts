import { Component, OnInit } from '@angular/core';
import {Produto} from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrl: './criar-produto.component.css'
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto = new Produto(); 

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}


  ngOnInit(): void {
  }

  salvarProduto() {
    this.produtoService.criarProduto(this.produto).subscribe(
      data => {
        console.log(data);
        this.listaProdutos();
      },
      error => console.log(error)
    )
  }

  listaProdutos() {
    this.router.navigate(['/produtos']);
  }

  onSubmit() {
    console.log(this.produto);
    this.salvarProduto();
  }
}
