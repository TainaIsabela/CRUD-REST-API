/**
 * Arquivo: produto.js
 * Author: Tainá Isabela
 * Descrição: arquivo responsável onde trataremos o modelo da classe 'Produto'
 * Data: 16/04/2021
 */

var moongose = require('mongoose');
var Schema = moongose.Schema;
/**
 * Produto:
 * 
 * ->Id: int
 * ->Nome: String
 * ->Preço: Number
 * ->Descrição: String
 * 
 */

var ProdutoSchema = new Schema({
    nome: String,
    preco: Number,
    descricao: String
});

module.exports = moongose.model('Produto', ProdutoSchema);
