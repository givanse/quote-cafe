var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/v1/quote', function (req, res) {
  var quote = {
    imgSrc: 'http://placehold.it/200x200',
    author: 'John Deer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    year: '1986'
  };
  res.send(quote);
});

app.listen(3001, function () {
  console.log('Quote Cafe listening on port 3001!')
});
