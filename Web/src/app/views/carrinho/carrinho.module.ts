import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components/item/item.component';
import { CarrinhoComponent } from './lista/carrinho.component';
import { CarrinhoService } from './carrinho.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CarrinhoComponent,
    ItemComponent
  ],
  providers: [
    CarrinhoService
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CarrinhoModule { }
