(function() {
  var beer = [
    { number: 'One beer', level: 'Level of Drunkenness: Not drunk.', drinkmore: 'Continue drinking? Yup.'},
    { number: 'Two beers', level: 'Level of Drunkenness: Still not drunk.', drinkmore: 'Continue drinking? Absolutely!'},
    { number: 'Three beers', level: 'Level of Drunkenness: Getting a little drunk.', drinkmore: 'Continue drinking? Keep \'em comin\'!'},
    { number: 'Four beers', level: 'Level of Drunkenness: Mmmmbeeerrrrrr.', drinkmore: 'Continue drinking? BEER ME.'}
  ];
  var app = angular.module('beerCount', []);
  app.controller('BeerCounter', function() {
    this.actions = beer;
  });
})();