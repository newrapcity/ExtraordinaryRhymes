/* eslint-disable no-param-reassign */

function markup(idNoHashtag, partType) {
  const song = [];
  const lineArray = $(`#${idNoHashtag}`).val().split(newline);
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

  const decompId = /([a-zA-Z]*)([0-9]*)(-textarea)/;
  const decompedId = decompId.exec(idNoHashtag);
  const newId = decompedId[1] + decompedId[2];
  if (decompedId[2] === '1') {
    decompedId[2] = '';
  }

  const name = `${decompedId[1].charAt(0).toUpperCase()}${decompedId[1].slice(1)} ${decompedId[2]}`;
  const header = `<h4 class="${newId}">${name}</h4>`;
  const body = `<p style="white-space:pre-line;" class="${newId}">${lyrics}</p>`;

  $('#markup').children(`.${newId}`).remove();

  $('#markup').append(header);
  $('#markup').append(body);
}
