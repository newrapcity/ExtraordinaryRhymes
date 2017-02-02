function VerseProcess(selection) {
  const verse = [];
  selection = BarProcess(selection);
  selection = PhraseProcess(selection, verse);
  verse.forEach(phrase => phrase.print());
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
}

// This is passed a 2d array, each row is a list of words.
function BarProcess(selection) {
  selection.forEach((bar, index) => {
    bar = bar.join(' ');
    bar = new Bar(bar);
    selection[index] = bar;
  });
  return selection;
}

function ChorusProcess() {}
function IntroProcess() {}
function BridgeProcess() {}
function OutroProcess() {}
