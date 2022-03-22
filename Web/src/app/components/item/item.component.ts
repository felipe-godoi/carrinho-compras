import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/views/carrinho/models/produto';

@Component({
  selector: 'item-carrinho',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() produto: Produto | null = null;
  descricao: string = "";
  precoAntigo: number = 0;
  preco: number = 0;
  imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
    if (this.produto){
      this.descricao = this.produto.name;
      this.precoAntigo = this.produto.price;
      this.preco = this.produto.sellingPrice;
      this.imageUrl = this.produto.imageUrl;
    }
  }

}
