import React, {Component} from 'react';
import Quote from './quote.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quote/>

        <footer className="App-footer">
          <h1>quote cafe</h1>
        </footer>
      </div>
    );
  }
}

export default App;
