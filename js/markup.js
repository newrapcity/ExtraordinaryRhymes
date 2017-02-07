'use strict';

var song = [];

$('#lyrics').on('keypress', function () {
  var lineArray = $('#lyrics').val().split(newline);
  var lyrics = '';
  var index = 0;

  lineArray.forEach(function (line) {
    var withoutPunct = rip(line, false);
    line += "\n";
    lyrics += line;

    if (withoutPunct.length > 0) {
      song[index] = withoutPunct.slice();
      index += 1;
    }
  });

  VerseProcess(song);
  $('#markup').html(lyrics);
});

$('#lyrics').on('select', function (text) {
  console.log(text);
});