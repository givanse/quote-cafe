import React, {Component} from 'react';
import Quote from './quote.js';
import quoteService from './quote-service.js';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: null
    };

    this.loadNewQuote();
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

  loadNewQuote() {
    quoteService.getRandomQuote().then(quote => {
      this.setState({quote: quote});
    });
  }

  render() {
    if (!this.state.quote) {
      return <div className='loading'>Loading...</div>;
    }

    return (
      <div className='App'>
        {this.renderQuote()}

        <button onClick={() => this.loadNewQuote()}>
          reload
        </button>

        <footer className='App-footer'>
          <h1>quote cafe</h1>
        </footer>
      </div>
    );
  }

}
