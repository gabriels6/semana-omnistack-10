//yarn init -y
//yarn add express
//yarn add nodemon -D
//yarn add mongoose = MongoDB
//yarn add axious <= buscar de outras apis
//yarn add cors

//Servidor tempo real
//yarn add socket.io

//nodemon index.js

//importando express
    const express = require('express');
    const mongoose = require('mongoose');
    const routes = require('../src/routes');
    const cors = require('cors');
    const http = require('http');
    const { setupWebsocket } = require('./websocket')

    const app = express();

    const server = http.Server(app);

    setupWebsocket(server);

    //conecta ao MongoDB
    mongoose.connect('mongodb+srv://Admin:Omni2521@cluster0-b22uz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

    }); 

    app.use(cors()); //Permitir acesso externo do backend

    //Entender o corpo json 
    app.use(express.json());

    //Utilizar rotas importadas de routes.js
    app.use(routes);

    //MÉTODOS get, post, put, delete
    //GET -         Query Params:    request.query  (filtros, ordenação, paginação, ...)
    //POST;DELETE - Route Params:    request.params (Identificar um recurso na alteração ou remoção)
    //POST-         Body:            request.body   (Dados para criação ou alteração de um registro)

    //MongoDB (Não-relacional)

   

    //endereço localhost
    server.listen(3333);