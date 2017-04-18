/* eslint-disable no-param-reassign */

function append(newId, anchorId, header, body) {
  $('#markup').children(`.${newId}`).remove();

  if (anchorId === 'top') {
    $('#markup').prepend(body);
    $('#markup').prepend(header);
  } else if ($(`p.${anchorId}`).length > 0) {
    $(`p.${anchorId}`).after(header);
    $(`p.${anchorId}`).next().after(body);
  } else if ($(`#${anchorId}`).prev().attr('id') === undefined) {
    append(newId, $(`#${anchorId}`).prev().prev('h4').attr('id'), header, body);
  } else {
    append(newId, $(`#${anchorId}`).prev('h4').attr('id'), header, body);
  }
}


function markup(idNoHashtag, partType, anchorId) {
  const song = [];
  const lineArray = $(`#${idNoHashtag}`).val().split(newline);
  let lyrics = '';

  lineArray.forEach((line, index) => {
    const withoutPunct = rip(line, false);
    song[index] = withoutPunct.slice();
  });

  switch (partType) {
    // case 'bridge':
      // lyrics = BridgeProcess(song);
      // break;
    case 'verse':
      lyrics = VerseProcess(song);
      if (lyrics === '') {
        lyrics = $(`#${idNoHashtag}`).val();
      }
      break;
    // case 'intro':
      // lyrics = IntroProcess(song);
      // break;
    case 'chorus':
      lyrics = ChorusProcess(song);
      break;
    // case 'outro':
      // lyrics = OutroProcess(song);
      // break;
    default:
      // Leave as is.
      lyrics = $(`#${idNoHashtag}`).val();
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

  append(newId, anchorId, header, body);
}
