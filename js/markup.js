'use strict';

var song = [];

function markup(idNoHashtag, partType) {
  var lineArray = $('#' + idNoHashtag).val().split(newline);
  var lyrics = '';
  var index = 0;

  lineArray.forEach(function (line) {
    var withoutPunct = rip(line, false);
    line += '\n';
    lyrics += line;

    if (withoutPunct.length > 0) {
      song[index] = withoutPunct.slice();
      index += 1;
    }
  });

  switch (partType) {
    case 'bridge':
      break;
    case 'verse':
      VerseProcess(song);
      break;
    case 'intro':
      break;
    case 'chorus':
      break;
    case 'outro':
      break;
    default:
      break;
  }

  $('#markup').html(lyrics);
}