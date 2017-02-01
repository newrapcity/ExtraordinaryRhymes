'use strict';

var api = 'https://api.datamuse.com/words?';

var space = /[\s]/;
var newline = /[\n]/;
var words = /^[a-zA-Z0-9'‘’!]+$/;
var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
var punct = /[^a-zA-Z0-9'‘’!]/;

var song = [];

$('#lyrics').on('keypress', function () {
  var lineArray = $('#lyrics').val().split(newline);
  var lyrics = '';
  var index = 0;

  lineArray.forEach(function (line) {
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

    withPunct = withPunct.join(' ');
    withPunct += '\n';
    lyrics += withPunct;

    if (withoutPunct.length > 0) {
      song[index] = withoutPunct.slice();
      index += 1;
    }
  });

  $('#markup').html(lyrics);
  process(song);
});