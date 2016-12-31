import React from 'react';
import ReactDOM from 'react-dom';
import Quote from '../quote';

test('renders without crashing', function() {
  const div = document.createElement('div');
  ReactDOM.render(<Quote />, div);
});

test('renders the author name', function() {
  const div = document.createElement('div');
  const author = 'foobar';
  ReactDOM.render(<Quote author={author}/>, div);

  const result = div.querySelector('.author').innerHTML;
  expect(result).toEqual(author);
});

test('renders the date', function() {
  const div = document.createElement('div');
  const year = '1986';
  ReactDOM.render(<Quote year={year}/>, div);

  const result = div.querySelector('.year').innerHTML;
  expect(result).toEqual(year);
});

test('renders the quote', function() {
  const div = document.createElement('div');
  const text = 'lorem ipsum dolor sit amet';
  ReactDOM.render(<Quote text={text}/>, div);

  const result = div.querySelector('.quote_text').innerHTML;
  expect(result).toEqual(text);
});

test('sets the picture source', function() {
  const div = document.createElement('div');
  const imgSrc = 'fake/path/image.jpg';
  ReactDOM.render(<Quote imgSrc={imgSrc}/>, div);

  const result = div.querySelector('img').src;
  expect(result).toEqual('http://localhost/' + imgSrc);
});
