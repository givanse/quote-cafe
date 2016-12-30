import React, {Component} from 'react';
import Quote from './quote.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote
          imgSrc='img/feynman.jpg'
          author='Cyril DeGrasse Tyson'
          text='Never stop testing, and your advertising will never stop improving.'
          year='1849'
        />

        <footer className="App-footer">
          <h1>quote cafe</h1>
        </footer>
      </div>
    );
  }
}

export default App;
