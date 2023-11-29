import { Component } from '@angular/core';
import { Produto } from '../models/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent {

  id!: string;
  produto!: Produto;
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.produto = new Produto();
    this.produtoService.mostrarProdutosPorId(this.id).subscribe((data) => {
      this.produto = data;
    });
  }
}
