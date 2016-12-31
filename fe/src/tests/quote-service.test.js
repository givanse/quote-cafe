import quoteService from '../quote-service';

describe('#setLocation', function() {

  test('returns the query string', function() {
    const quoteIds = [1, 2, 3, 4];
    const result = quoteService.setLocation(quoteIds); 
    expect(result).toEqual('?q=1.2.3.4');
  });

  test('sets the query string in the location object', function() {
    const quoteIds = [0, 0, 0, 0];
    quoteService.setLocation(quoteIds); 
    //expect(window.location.search).toEqual('?q=0.0.0.0'); // THIS 
    expect(window.location.hash).toEqual('#?q=0.0.0.0'); // Not this ;-;
  });

});
