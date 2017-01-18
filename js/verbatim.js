'use strict';

/* function write() {
    let lyrics = $("#lyrics").val();
    console.log(lyrics);
} */

// $(window).on("load", write)

// let re = /[^a-zA-Z0-9'’]*/;
// let re = /[\s\n]*/;

// let wordArray = lyrics.replace(/[\n\s]/, "~");
// wordArray = lyrics.replace(/[^a-zA-Z0-9'’~]/, "");
// wordArray = wordArray.split("~");

$('#lyrics').on('keypress', function () {
  var lyrics = $('#lyrics').val();

  var spaces = /[\s\n]/;
  var words = /^[a-zA-Z0-9'‘’!]+$/;
  var endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
  var startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
  var punct = /[^a-zA-Z0-9'‘’!]/;

  var wordArray = lyrics.split(spaces);
  var newWordArray = [];

  wordArray.forEach(function (word) {
    if (words.test(word)) {
      newWordArray.push(word);
      // console.log(word);
    } else if (startPunct.test(word) || endPunct.test(word)) {
      var stripWord = word.replace(punct, '');
      newWordArray.push(stripWord);
      // console.log(stripWord);
    } else {
        // Pass.
      }
  });

  var markup = newWordArray.map(function (word) {
    return '{' + word + '}';
  });
  $('#markup').html(markup);
});