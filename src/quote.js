import React, {Component} from 'react';

class Quote extends Component {
  render() {
    return (
      <article className='quote'>
        <img className='fleft' src="https://placeholdit.imgix.net/~text?txtsize=33&txt=pic&w=100&h=100"/>
        <p className='quote_text fleft'>
          lorem ipsum dolor amet sim
        </p>

        <div className='clearfix'></div>

        <p className='quote_author fright'>
          <span className='author'>
            John Doe
          </span>
          <span className='date'>
            1900
          </span>
        </p>

        <div className='clearfix'></div>
      </article>);
  }
}

export default Quote;
