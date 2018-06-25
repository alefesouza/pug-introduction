const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('express', {
    title: 'Pug no Express.js',
    items: ['Mongo', 'Express', 'Angular', 'Node', 'Pug']
  });
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});