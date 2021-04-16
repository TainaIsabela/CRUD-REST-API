/**
 * Arquivo: server.js
 * Descrição: Arquivo que irá levantar a aplicação de CRUD.
 * Author: Tainá Isabela
 * Data de Criação: 16/04/2021
 */

//Configurar o setup da App:

//Chamada dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moongose = require('mongoose');
var Produto = require('./app/models/produto');
const {
    Router
} = require('express');

//Maneira Local:MongoDB:
moongose.connect('mongodb://localhost:27017/node-crud-api', {
    useMongoClient: true
});

//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//Definindo a porta onde será executada a nossa api:
var port = process.env.port || 8000;
//Rotas da API:
//====================================================
//Criando uma instância das Rotas via Express:
var router = express.Router();
//Rota de exemplo:
router.use(function (req, res, next) {
    console.log('Algo está acontecendo aqui...');
    next();
});
router.get('/', function (req, res) {
    res.json({
        message: "Bem vinda! você conseguiu! ^u^"
    })
});
//API's:
//====================================================
//Rotas que terminarem com '/produtos' (servir: GET ALL & POST)
router.route('/produtos')
    /**
     * 1) Método: Criar Produto (acessar em : POST http://localhost:8000/api/produtos)
     */
    .post(function (req, res) {
        var produto = new Produto();


        //Setar os campos do Produto (via request):

        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function (error) {
            if (error) res.send('Erro ao tentar salvar o produto... ' + error);
            res.json({
                message: 'Produto Cadastrado com Sucesso!'

            });
        });
    })
    /**
     * 2) Método: Selecionar Todos os  Produto (acessar em : GET http://localhost:8000/api/produtos)
     */
    .get(function (req, res) {
        Produto.find(function (error, produtos) {
            if (error)
                res.send('Erro ao tentar selecionar todos os produtos..:' + error);
            res.json(produtos);
        })
    });


//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);
//Iniciando a Aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);