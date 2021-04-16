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

//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//Definindo a porta onde será executada a nossa api:
var port = process.env.port || 8000;
//Criando uma instância das Rotas via Express:
var router = express.Router();
//Rota de exemplo:
router.get('/', function (req, res) {
    res.json({
        message: "Bem vinda! você conseguiu! ^u^"
    })
});
//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);
//Iniciando a Aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);