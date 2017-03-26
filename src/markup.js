const MarkedUpBlock = new MarkedUp();

class MarkedUp {

  constructor() {
    this.intro = new Array();
    this.verse = new Array();
    this.chorus = new Array();
    this.bridge = new Array();
    this.outro = new Array();
  }

  addIntro(intro, index) {
    this.intro[index] = intro;
  }

  addVerse(verse, index) {
    this.verse[index] = verse;
  }

  addChorus(chorus, index) {
    this.chorus[index] = chorus;
  }

  addBridge(bridge, index) {
    this.bridge[index] = bridge;
  }

  addOutro(outro, index) {
    this.outro[index] = outro;
  }

  paste() {
    this.intro.forEach((intro) => {
      $('#markup').append(intro.header);
      $('#markup').append(intro.body);
    });
    this.verse.forEach((verse) => {
      $('#markup').append(verse.header);
      $('#markup').append(verse.body);
    });
    this.chorus.forEach((chorus) => {
      $('#markup').append(chorus.header);
      $('#markup').append(chorus.body);
    });
    this.intro.forEach((intro) => {
      $('#markup').append(intro.header);
      $('#markup').append(intro.body);
    });
    this.intro.forEach((intro) => {
      $('#markup').append(intro.header);
      $('#markup').append(intro.body);
    });
  }

}

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

  const index = decompedId[2];

  if (decompedId[2] === '1') {
    decompedId[2] = '';
  }

  const name = decompedId[1].charAt(0).toUpperCase() + decompedId[1].slice(1) + ' ' + decompedId[2];
  const header = `<h4 class="${newId}">${name}</h4>`;
  const body = `<p style="white-space:pre-line;" class="${newId}">${lyrics}</p>`;

  switch (partType) {
    case 'bridge':
      MarkedUpBlock.addBridge({'header': header, 'body': body}, index);
      break;
    case 'verse':
      MarkedUpBlock.addVerse({'header': header, 'body': body}, index);
      break;
    case 'intro':
      MarkedUpBlock.addIntro({'header': header, 'body': body}, index);
      break;
    case 'chorus':
      MarkedUpBlock.addChorus({'header': header, 'body': body}, index);
      break;
    case 'outro':
      MarkedUpBlock.addOutro({'header': header, 'body': body}, index);
      break;
    default:
      // Leave as is.
      break;
  }

  /* $('#markup').children(`.${newId}`).remove();

  $('#markup').append(header);
  $('#markup').append(body); */

  $('#markup').html('');
  MarkedUpBlock.paste();

}