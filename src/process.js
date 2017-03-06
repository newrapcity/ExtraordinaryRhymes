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
  for (let i = 0; i < selection.length; i++) {
    phrase.push(selection[i]);
    if ((i + 1) % 4 === 0) {
      phrase = new Phrase(phrase);
      verse.push(phrase);
      phrase = [];
    }
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

function ChorusProcess() {}
function IntroProcess() {}
function BridgeProcess() {}
function OutroProcess() {}
