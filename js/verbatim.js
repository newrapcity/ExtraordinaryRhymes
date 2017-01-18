'use strict';

var api = 'https://api.datamuse.com/words?';

var space = /[\s]/;
var newline = /[\n]/;
var words = /^[a-zA-Z0-9'‘’!]+$/;
var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
var punct = /[^a-zA-Z0-9'‘’!]/;

var returnBraces = function returnBraces(wordArray) {};

$('#lyrics').on('keypress', function () {
  var lineArray = $('#lyrics').val().split(newline);
  var lyrics = '';
  var wordArray = [];
  var newWordArray = [];

  lineArray.forEach(function (line) {
    newWordArray = [];
    wordArray = line.split(space);
    wordArray.forEach(function (word) {
      if (words.test(word)) {
        newWordArray.push(word);
      } else if (startPunct.test(word) || endPunct.test(word)) {
        // const stripWord = word.replace(punct, '');
        // newWordArray.push(stripWord);
        newWordArray.push(word);
      } else {
        newWordArray.push(word);
      }
    });
    newWordArray = newWordArray.join(' ');
    newWordArray += '\n';
    lyrics += newWordArray;
  });

  // const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(lyrics);
});

$('#markup').on('change', function () {});