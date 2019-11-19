const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');


const app = express();

// porta de acesso 27017
//node 3
//mongodb+srv://<username>:<password>@dbomni-txagc.mongodb.net/admin?retryWrites=true&w=majority
//mongodb+srv://omnistack:9omnistack9@dbomni-txagc.mongodb.net/semana09?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://omnistack:9omnistack9@dbomni-txagc.mongodb.net/semana09?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// define a rota -  GET, POST, PUT, DELETE
// req.query  - GET  - acessar com Query params - para filtros
// req.params - PUT, POST  - acessar com Path params - para edição, delete e para criação(POST) de objetos filhos de outros já criados
// req.body   - POST - acessar CORPO(Body) da requisição - para criação, edição

//habilita receber requisições de fora
app.use(cors());
//app.use(cors({ origin: 'http://localhost:3333' }));
app.use(express.json());
//path do upload e do spots.js
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads')));
// depois da linha app.use(express.json());
app.use(routes);

app.listen(3333);
