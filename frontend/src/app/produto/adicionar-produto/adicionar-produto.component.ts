import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adicionar-produto.component.html',
  styleUrl: './adicionar-produto.component.css'
})
export class AdicionarProdutoComponent {
  novoProduto:any = {}
  
  constructor(private router:Router, private produtoService: ProdutoService){}
  
  adicionarProduto() {
    this.produtoService.adicionarProduto(this.novoProduto).subscribe(
      data => {
        console.log('Produto adicionado com sucesso: ', data)
        this.router.navigate(['/produtos']);
      },
      error => {
        console.error(error)
      }
    )
  }
}
