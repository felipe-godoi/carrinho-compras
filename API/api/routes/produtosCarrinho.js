module.exports = app => {
    const controller = require('../controllers/produtosCarrinho')();
  
    app.route('/api/v1/produtos/abaixo')
      .get(controller.listarProdutosAbaixo);

    app.route('/api/v1/produtos/acima')
      .get(controller.listarProdutosAcima);
  }