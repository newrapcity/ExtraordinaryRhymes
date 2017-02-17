const song = [];

function markup(idNoHashtag, partType) {
  const lineArray = $('#' + idNoHashtag).val().split(newline);
  let lyrics = '';
  let index = 0;

  lineArray.forEach((line) => {
    const withoutPunct = rip(line, false);
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
