module.exports = () => {
    const produtosAbaixo = require('../data/abaixo-10-reais.json');
    const produtosAcima = require('../data/acima-10-reais.json');
    const controller = {};
  
    controller.listarProdutosAbaixo = (req, res) => {
        const itens = produtosAbaixo.items.map(x => {
            return {
                name: x.name,
                price: x.price,
                sellingPrice: x.sellingPrice,
                imageUrl: x.imageUrl
            }
        });

        res.status(200).json({
            valor: produtosAbaixo.value,
            itens: itens
        });
    }
  
    controller.listarProdutosAcima = (req, res) => {
        const itens = produtosAcima.items.map(x => {
            return {
                name: x.name,
                price: x.price,
                sellingPrice: x.sellingPrice,
                imageUrl: x.imageUrl
            }
        });

        res.status(200).json({
            valor: produtosAcima.value,
            itens: itens
        });
    }
  
    return controller;
  }