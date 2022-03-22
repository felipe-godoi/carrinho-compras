import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Carrinho } from '../models/carrinho';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  preco: number = 0;
  loading: boolean = false;
  categoria: string = "";
  produtos: Array<Produto> = [];

  constructor(private carrinhoService: CarrinhoService,
    private route: ActivatedRoute,
    private router: Router) { 
      
    }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.categoria = data['categoria'];
      this.carregarProdutos();
    });
  }

  carregarProdutos(){
    this.produtos = [];
    this.loading = true;
    this.carrinhoService.getProdutos(this.categoria).subscribe({
      next: (carrinho: Carrinho) => {
        this.loading = false;
        this.produtos = carrinho.itens;
        this.preco = carrinho.valor;
      },
      error: (error) => {
        this.loading = false;
        console.log(error)
      }
    });
  }

  trocarCarrinho(){
    if (this.categoria == "abaixo"){
      this.router.navigateByUrl("carrinho2");
    } else {
      this.router.navigateByUrl("carrinho1");
    }
  }

}
