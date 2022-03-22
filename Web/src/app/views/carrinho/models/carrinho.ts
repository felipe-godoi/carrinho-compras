import { Produto } from "./produto";

export interface Carrinho {
    valor: number,
    itens: Array<Produto>
}