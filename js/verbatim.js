'use strict';

var api = 'https://api.datamuse.com/words?';

var space = /[\s]/;
var newline = /[\n]/;
var words = /^[a-zA-Z0-9'‘’!]+$/;
var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
var punct = /[^a-zA-Z0-9'‘’!]/;

var withoutPunct = [];
var withPunct = [];

var returnBraces = function returnBraces(wordArray) {};

$('#lyrics').on('keypress', function () {
  var lineArray = $('#lyrics').val().split(newline);
  var lyrics = '';
  var wordArray = [];
  withPunct = [];
  withoutPunct = [];

  lineArray.forEach(function (line) {
    withPunct = [];
    wordArray = line.split(space);
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
    withPunct = withPunct.join(' ');
    withPunct += '\n';
    lyrics += withPunct;
  });

  for (var i = 0; i < withPunct.length; i++) {
    for (var k = i + 1; k < withPunct.length; k++) {
      // Meh.
    }
  }

  // const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(withoutPunct);
});

$('#markup').on('change', function () {});