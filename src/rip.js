/* eslint-disable no-else-return */

const api = 'https://api.datamuse.com/words?';
const soundsLike = 'sl';
const rhymesWith = 'rel_rhy';

const space = /[\s\u2014\u2013\u002D]/;  // Allow the em dash, en dash, and the hyphen-minus.
const newline = /[\n]/;
const wordsNoPunct = /^[a-zA-Z]+$/;

// This allows for words like "‘till" and "let's", or "I'm".
// However it strips out the apostrophes since the API only allows alphabetical characters.
// At the end of the word there is an allowed non-alphabetical character,
//   to cover cases such as: "says:", "where?", "nice!", or "best,".
// Issue: hypens and en dashes? What about em dashes?
const punctWord = /^[a-zA-Z'‘’]+([^a-zA-Z])?$/;
const punct = /[^a-zA-Z]/g;

function rip(line, withOrWithout) {
  const withPunct = [];
  const withoutPunct = [];
  const wordArray = line.split(space);

  wordArray.forEach((word) => {
    if (wordsNoPunct.test(word)) {
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
