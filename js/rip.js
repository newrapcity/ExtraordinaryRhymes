'use strict';

var api = 'https://api.datamuse.com/words?';
var soundsLike = 'sl';
var rhymesWith = 'rel_rhy';

var space = /[\s]/;
var newline = /[\n]/;
var words = /^[a-zA-Z]+$/;

// This allows for words like "‘till" and "let's", or "I'm". However it strips out the apostrophes since the API only allows alphabetical characters.
// At the end of the word there is an allowed non-alphabetical character, to cover cases such as: "says:", "where?", "nice!", or "best,".
// Issue: hypens and en dashes? What about em dashes?
var punctWord = /^[a-zA-Z'‘’]+([^a-zA-Z])?$/;
var punct = /[^a-zA-Z]/g;

function rip(line, withOrWithout) {
  var withPunct = [];
  var withoutPunct = [];
  var wordArray = line.split(space);

  wordArray.forEach(function (word) {
    if (words.test(word)) {
      withPunct.push(word);
      withoutPunct.push(word);
    } else if (punctWord.test(word)) {
      var stripWord = word.replace(punct, '');
      withoutPunct.push(stripWord);
      withPunct.push(word);
    } else {
      withPunct.push(word);
    }
  });

  if (withOrWithout) {
    return withPunct;
  } else {
    return withoutPunct;
  }
}