import React, {Component} from 'react';

/**
 * props {
 *   imgSrc
 *   text
 *   author
 *   year
 * }
 */
class Quote extends Component {

  render() {
    return (
      <article className='quote'>
        <img className='fleft' src={this.props.imgSrc}/>
        <p className='quote_text fleft'>
          {this.props.text}
        </p>

        <div className='clearfix'></div>

        <p className='quote_author fright'>
          <span className='author'>
            {this.props.author}
          </span>
          <span className='year'>
            {this.props.year}
          </span>
        </p>

        <div className='clearfix'></div>
      </article>);
  }

}

export default Quote;
