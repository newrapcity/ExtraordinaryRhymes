'use strict';

$('#lyrics').on('keypress', function () {
  var lyrics = $('#lyrics').val();

  var space = /[\s]/;
  var newline = /[\n]/;
  var words = /^[a-zA-Z0-9'‘’!]+$/;
  var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
  var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
  var punct = /[^a-zA-Z0-9'‘’!]/;

  var lineArray = lyrics.split(newline);
  lyrics = '';
  var wordArray = [];
  var newWordArray = [];

  lineArray.forEach(function (line) {
    newWordArray = [];
    wordArray = line.split(space);
    wordArray.forEach(function (word) {
      if (words.test(word)) {
        newWordArray.push(word);
        // console.log(word);
      } else if (startPunct.test(word) || endPunct.test(word)) {
        // const stripWord = word.replace(punct, '');
        // newWordArray.push(stripWord);
        newWordArray.push(word);
        // console.log(stripWord);
      } else {
        newWordArray.push(word);
      }
    });
    newWordArray = newWordArray.join(' ');
    newWordArray += '\n';
    // console.log(newWordArray);
    lyrics += newWordArray;
  });

  // const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(lyrics);
});