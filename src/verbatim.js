const api = 'https://api.datamuse.com/words?';

const space = /[\s]/;
const newline = /[\n]/;
const words = /^[a-zA-Z0-9'‘’!]+$/;
const endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
const startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
const punct = /[^a-zA-Z0-9'‘’!]/;

const returnBraces = function returnBraces(wordArray) {};

$('#lyrics').on('keypress', () => {
  const lineArray = $('#lyrics').val().split(newline);
  let lyrics = '';
  let wordArray = [];
  let withPunct = [];
  let withoutPunct = [];

  lineArray.forEach((line) => {
    withPunct = [];
    wordArray = line.split(space);
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
  });

  // const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(lyrics);
});

$('#markup').on('change', () => {});
