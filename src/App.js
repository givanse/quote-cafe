import React, {Component} from 'react';
import Quote from './quote.js';
import './App.css';
import 'whatwg-fetch';

const BE_URL = 'http://localhost:3001';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: {
        imgSrc: 'http://placehold.it/200x200',
        author: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        year: '1984'
      }
    };
    this.setQueryString([0, 0, 0, 0]); // TODO: clean up
  }
 
  componentDidMount() {
  }

  renderQuote() {
    return (
      <Quote
        imgSrc={this.state.quote.imgSrc}
        author={this.state.quote.author} 
        text={this.state.quote.text}
        year={this.state.quote.year}
      />
    );
  }

  generateRandomQuote() {
    return [1, 1, 1, 1];
  }

  getNewQuote() {
    const quoteIds = this.generateRandomQuote() 

    return fetch(BE_URL + '/v1/quote')
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        this.setQueryString(quoteIds);
        return response.json();
      }  else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    });
  }

  loadNewQuote() {
    this.getNewQuote()
    .then(quote => this.setState({quote: quote}));
  }

  render() {
    return (
      <div className="App">
        {this.renderQuote()}

        <button onClick={() => this.loadNewQuote()}>
          reload
        </button>

        <footer className="App-footer">
          <h1>quote cafe</h1>
        </footer>
      </div>
    );
  }

  setQueryString(quoteIds) {
    const qs = this.buildQueryString(quoteIds);
    if (window.location.search === qs) { //TODO: re-think
      return;
    }
    //window.location.search = qs;
    window.location.assign('/#'+qs);
  }

  buildQueryString(quoteIds) {
    return '?q=' + quoteIds.join('+'); 
  }

}

export default App;
