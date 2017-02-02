const api = 'https://api.datamuse.com/words?';

const space = /[\s]/;
const newline = /[\n]/;
const words = /^[a-zA-Z0-9'‘’!]+$/;
const endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
const startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
const punct = /[^a-zA-Z0-9'‘’!]/;

const song = [];

$('#lyrics').on('keypress', () => {
  const lineArray = $('#lyrics').val().split(newline);
  let lyrics = '';
  let index = 0;

  lineArray.forEach((line) => {
    let withPunct = [];
    const withoutPunct = [];
    const wordArray = line.split(space);

    wordArray.forEach((word) => {
      if (words.test(word)) {
        withPunct.push(word);
        withoutPunct.push(word);
      } else if (startPunct.test(word) || endPunct.test(word)) {
        const stripWord = word.replace(punct, '');
        withoutPunct.push(stripWord);
        withPunct.push(word);
      } else {
        withPunct.push(word);
      }
    });

    withPunct = withPunct.join(' ');
    withPunct += '\n';
    lyrics += withPunct;

    if (withoutPunct.length > 0) {
      song[index] = withoutPunct.slice();
      index += 1;
    }
  });

  VerseProcess(song);
  $('#markup').html(lyrics);
});

$('#lyrics').on('select', (text) => {
  console.log(text);
});
