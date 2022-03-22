import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './views/carrinho/lista/carrinho.component';

const routes: Routes = [
  { path: '', component: CarrinhoComponent, data: {categoria: "abaixo"} },
  { path: 'carrinho1', component: CarrinhoComponent, data: {categoria: "abaixo"} },
  { path: 'carrinho2', component: CarrinhoComponent, data: {categoria: "acima"} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
