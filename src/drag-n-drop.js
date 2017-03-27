/* eslint-disable no-undef */

let idToTransfer = '';

function replaceId(html) {
  const decompHTML = /(.*id=")(.*?)(".*)/;
  const decompedHTML = decompHTML.exec(html);

  const decompId = /([a-zA-Z]*)([0-9]*)/;
  const decompedId = decompId.exec(decompedHTML[2]);

  decompedId[2] = '1';

  while ($(`#${decompedId[1]}${decompedId[2]}`).length > 0) {
    let number = parseInt(decompedId[2], 10);
    number += 1;
    decompedId[2] = number.toString();
  }

  const newHTML = decompedHTML[1] + decompedId[1] + decompedId[2] + decompedHTML[3];
  return [newHTML, decompedId[1], decompedId[2]];
}

function dropIn(event, aboveOrBelow) {
  event.preventDefault();
  const htmlAndId = replaceId(document.getElementById(idToTransfer.substring(1)).outerHTML);
  const newId = htmlAndId[1] + htmlAndId[2];
  if (aboveOrBelow) {
    $('#bottom').before(htmlAndId[0]);
    $(`#${newId}`).addClass(newId);
    $(`#${newId}`).html(`${htmlAndId[1].charAt(0).toUpperCase()}${htmlAndId[1].slice(1)} ${htmlAndId[2]}`);
    $(`#${newId}`).after(`<textarea id="${newId}-textarea" class="form-control ${newId}"></textarea>`);
    document.getElementById(`${newId}-textarea`).addEventListener('keypress', (e) => {
      markup(`${newId}-textarea`, htmlAndId[1]);
    }, false);
  } else {
    $('#top').after(htmlAndId[0]);
    $(`#${newId}`).addClass(newId);
    $(`#${newId}`).html(`${htmlAndId[1].charAt(0).toUpperCase()}${htmlAndId[1].slice(1)} ${htmlAndId[2]}`);
    $(`#${newId}`).after(`<textarea id="${newId}-textarea" class="form-control ${newId}></textarea>`);
    document.getElementById(`${newId}-textarea`).addEventListener('keypress', (e) => {
      markup(`${newId}-textarea`, htmlAndId[1]);
    }, false);
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function dragStart(event) {
  idToTransfer = `#${event.target.id}`;
}

function trash(event) {
  event.preventDefault();
  $(`.${idToTransfer.substring(1)}`).remove();
}
