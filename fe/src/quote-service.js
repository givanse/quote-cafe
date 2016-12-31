import 'whatwg-fetch'; // sets up `fetch`
import math from './math.js';

const BE_URL = 'http://localhost:3001';

class QuoteService {

  constructor(totalQuotes) {
    this.totalQuotes = totalQuotes;
    this.quoteIds = {
      imgSrcId: 0,
      authorId: 0,
      textId: 0,
      yearId: 0  
    };
  }

  generateRandomQuoteIds() {
    let {imgSrcId, authorId, textId, yearId} = this.quoteIds;

    const i = math.getRandomId(imgSrcId, this.totalQuotes); 
    const a = math.getRandomId(authorId, this.totalQuotes); 
    const t = math.getRandomId(textId, this.totalQuotes); 
    const y = math.getRandomId(yearId, this.totalQuotes); 

    return [i, a, t, y]; 
  }

  getRandomQuote() {
    const quoteIds = this.generateRandomQuoteIds(); 
    this.quoteIds = quoteIds;
    const queryString = this.setLocation(quoteIds);

    return fetch(BE_URL + '/v1/quote' + queryString)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }  else {
        let message = 'QuoteService: ' + response.statusText;
        let error = new Error(message);
        error.response = response;
        throw error;
      }
    });
  }

  setLocation(quoteIds) {
    const queryString = '?q=' + quoteIds.join('.'); 
    const url = '/#';
    window.location.assign(url + queryString);
    return queryString;
  }
}

export default new QuoteService(3);
