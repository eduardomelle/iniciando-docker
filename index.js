const express = require('express');

const app = express();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'mydb',
});

connection.connect();

app.get('/', (req, resp) => {
  resp.send('Hello World with Node.js and Docker Compose!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});
