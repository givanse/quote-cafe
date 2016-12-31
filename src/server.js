var express = require('express');
var app = express();

var imgSrcUrl = 'http://placehold.it/200x200?text=';

var quotes = [
  {
    id: 1,
    imgSrc: imgSrcUrl + 'one', 
    author: 'one',
    text: 'one',
    year: 'one'
  },
  {
    id: 2,
    imgSrc: imgSrcUrl + 'two', 
    author: 'two',
    text: 'two',
    year: 'two'
  },
  {
    id: 3,
    imgSrc: imgSrcUrl + 'three', 
    author: 'three',
    text: 'three',
    year: 'three'
  }
];

function buildNewQuote(query) {
  // imgSrcId, authorId, textId, yearId  
  var ids = query.q.split('.');
  var imgSrcId = ids[0];
  var authorId = ids[1];
  var textId = ids[2];
  var yearId = ids[3];

  //TODO: validate none of the IDs are higher than the total number of quotes

  var quote = {
    imgSrc: quotes[imgSrcId].imgSrc,
    author: quotes[authorId].author,
    text: quotes[textId].text, 
    year: quotes[yearId].year
  };

  return quote;
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/v1/quote', function (req, res) {
  if (!req.query) {
    res.status(404).send('Not found');
  }

  var quote = buildNewQuote(req.query);
  res.send(quote);
});

app.listen(3001, function () {
  console.log('Quote Cafe listening on port 3001!')
});
