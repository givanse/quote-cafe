import React, {Component} from 'react';
import Quote from './quote.js';
import './App.css';

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

  getNewQuote() {
    let quote = {
      imgSrc: 'img/feynman.jpg',
      author: 'Cyril DeGrasse Tyson',
      text: 'Never stop testing, and your advertising will never stop improving.',
      year: '1849'
    };
    return quote;
  }

  loadNewQuote() {
    let quote = this.getNewQuote();
    this.setState({quote: quote});
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
}

export default App;
