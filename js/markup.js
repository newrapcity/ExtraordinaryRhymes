'use strict';

function markup(idNoHashtag, partType) {
  var song = [];
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
      lyrics = BridgeProcess(song);
      break;
    case 'verse':
      lyrics = VerseProcess(song);
      break;
    case 'intro':
      lyrics = IntroProcess(song);
      break;
    case 'chorus':
      lyrics = ChorusProcess(song);
      break;
    case 'outro':
      lyrics = OutroProcess(song);
      break;
    default:
      // Leave as is.
      break;
  }

  var decompId = /([a-zA-Z]*)([0-9]*)(-textarea)/;
  var decompedId = decompId.exec(idNoHashtag);
  var newId = decompedId[1] + decompedId[2];
  if (decompedId[2] === '1') {
    decompedId[2] = '';
  }

  var name = decompedId[1].charAt(0).toUpperCase() + decompedId[1].slice(1) + decompedId[2];
  var header = '<h4 class=\"' + newId + '\">' + name + '</h4>';
  var body = '<p style=\"white-space:pre-line;\" class=\"' + newId + '\">' + lyrics + '</p>';

  $('#markup').children('.' + newId).remove();

  $('#markup').append(header);
  $('#markup').append(body);
}