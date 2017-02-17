'use strict';

var api = 'https://api.datamuse.com/words?';
var soundsLike = 'sl';
var rhymesWith = 'rel_rhy';

var space = /[\s]/;
var newline = /[\n]/;
var words = /^[a-zA-Z0-9'‘’!]+$/;
var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
var punct = /[^a-zA-Z0-9'‘’!]/;

function rip(line, withOrWithout) {
  var withPunct = [];
  var withoutPunct = [];
  var wordArray = line.split(space);

  wordArray.forEach(function (word) {
    if (words.test(word)) {
      withPunct.push(word);
      withoutPunct.push(word);
    } else if (startPunct.test(word) || endPunct.test(word)) {
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