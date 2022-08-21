const express = require('express');

const app = express();

app.get('/', (req, resp) => {
  resp.send('Hello World com Node.js com Docker!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});
