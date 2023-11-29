import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';
import { AtualizarProdutoComponent } from './atualizar-produto/atualizar-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  {path: 'produtos', component: ListarProdutosComponent},
  {path: 'criar-produto', component: CriarProdutoComponent},
  {path: '', redirectTo: 'produtos', pathMatch: 'full'},
  {path: 'atualizar-produto/:id', component: AtualizarProdutoComponent},
  {path: 'detalhes-produto/:id', component: DetalhesProdutoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
