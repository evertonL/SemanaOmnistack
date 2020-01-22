const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministacks:147852369@cluster0-4tgzx.gcp.mongodb.net/week10?retryWrites=true&w=majority');

app.use(express.json());
app.use(routes);

app.listen(3333);







// Metodos HTTP: get, post, put, delete

// Tipos de paramatros
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route Params: request.params(Identifica um recurso na alteração ou remoção)
// Body: request.body(Dados para criação ou alteração de um registro)

// MongoDB(Nao-relacional)