/* eslint-disable no-param-reassign */

// This is passed a 2d array, each row is a list of words.
function BarProcess(selection) {
  selection.forEach((bar, index) => {
    bar = bar.join(' ');
    bar = new Bar(bar);
    selection[index] = bar;
  });
  return selection;
}

// This is passed an array of bars and returns an array of phrases.
function PhraseProcess(selection, verse) {
  let phrase = [];
  selection.forEach((bar, index) => {
    phrase.push(bar);
    if (bar === '') {
      phrase = new Phrase(phrase);
      verse.push(phrase);
      phrase = [];
    }
  });
  if (phrase.length > 0) {
    phrase = new Phrase(phrase);
    verse.push(phrase);
  }
  return verse;
}

function VerseProcess(selection) {
  let verse = [];
  selection = BarProcess(selection);
  verse = PhraseProcess(selection, verse);
  verse = new Verse(verse.length * 4, verse);
  return verse.rhyme();
}

function ChorusProcess(selection) {
  selection = BarProcess(selection);
  selection = new Phrase(selection);
  const chorus = new Chorus(selection);
  return chorus.rhyme();
}
function IntroProcess(selection) {
  return selection;
}
function BridgeProcess(selection) {
  return selection;
}
function OutroProcess(selection) {
  return selection;
}
