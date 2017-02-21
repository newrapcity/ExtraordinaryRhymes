const api = 'https://api.datamuse.com/words?';
const soundsLike = 'sl';
const rhymesWith = 'rel_rhy';

const space = /[\s]/;
const newline = /[\n]/;
const words = /^[a-zA-Z]+$/;
const punctWord = /^[a-zA-Z'‘’]+$/;
const punct = /[^a-zA-Z]/;

function rip(line, withOrWithout) {
  const withPunct = [];
  const withoutPunct = [];
  const wordArray = line.split(space);

  wordArray.forEach((word) => {
    if (words.test(word)) {
      withPunct.push(word);
      withoutPunct.push(word);
    } else if (punctWord.test(word)) {
      const stripWord = word.replace(punct, '');
      withoutPunct.push(stripWord);
      withPunct.push(word);
    } else {
      withPunct.push(word);
    }
  });

  if (withOrWithout) {
    return withPunct;
  } else {
    return withoutPunct;
  }
}
