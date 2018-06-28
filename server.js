const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Título',
    items: ['Pug', 'TypeScript', 'Sass']
  });
});

app.listen(3000, function() {
  console.log('http://localhost:3000');
});