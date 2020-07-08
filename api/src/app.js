const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//importar o database.js
const localDatabase = require('./config/database');
const databaseCosmosDb = require('./config/databaseCosmos');

mongoose.Promise = global.Promise;

//conexao com a base de dados local
mongoose.connect(localDatabase.local.localUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log('a base foi conectado com sucesso')
  }, (err) => {
    console.log(`erro ao conectar com a base de dados...: ${err}`)
    process.exit()
  })

//rotas

const funcionarioRoute = require('./routes/funcionarioRoute');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));
app.use(morgan('dev'));
app.use(cors());


app.use('/api/', funcionarioRoute);

module.exports = app;
