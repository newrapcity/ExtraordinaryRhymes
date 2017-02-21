function VerseException(message) {
  this.message = message;
  this.name = 'VerseException';
}

function BarException(message) {
  this.message = message;
  this.name = 'BarException';
}

function PhraseException(message) {
  this.message = message;
  this.name = 'PhraseException"=';
}

class Bar {
  constructor(line) {
    try {
      if (typeof line === 'string') {
        this.line = line;
      } else {
        throw new BarException('Bar variable does not consist of a string.');
      }
    } catch (e) {
      console.error(e);
    }
  }
  getLine() {
    return this.line;
  }
  ripLine() {
    return rip(this.line, false);
  }
}

function typeCheckPhrase(bars) {
  let checks = 0;
  const check = bars.forEach((bar) => {
    if (!(bar instanceof Bar)) {
      return false;
    }
    checks += 1;
    if (checks === bars.length) {
      return true;
    }
  });
  return check;
}

class Phrase {
  constructor(bars) {
    try {
      if (bars.length !== 4) {
        throw new PhraseException('Phrase must consist of four Bars.');
      } else if (typeCheckPhrase(bars)) {
        throw new PhraseException('Phrase object must consist four Bar objects.');
      } else {
        this.bars = bars;
      }
    } catch (e) {
      console.error(e);
    }
  }
  print() {
    for (let i = 0; i < this.bars.length; i++) {
      console.log(this.bars[i].getLine());
    }
    console.log('\n');
  }
  rhyme() {
    let allWords = [];
    let wordSets = [];

    this.bars.forEach((bar) => {
      const wordArray = bar.ripLine();
      allWords = allWords.concat(wordArray.slice());
    });

    for (let i = 0; i < allWords.length; i++) {
      $.ajax({
        url: `${api}${rhymesWith}=${allWords[i]}`,
      }).done((rhymeArray) => {
        wordSets.push(new Set(rhymeArray.map((result) => {
          return result['word'];
        })));
      });
    }
  }
}

function typeCheckVerse(phrases) {
  let checks = 0;
  const check = phrases.forEach((phrase) => {
    if (!(phrase instanceof Phrase)) {
      return false;
    }
    checks += 1;
    if (checks === phrases.length) {
      return true;
    }
  });
  return check;
}

class Verse {
  constructor(size, phrases) {
    try {
      if (size !== phrases.length * 4) {
        throw new VerseException('Purported size of verse does not match amount of bars given.');
      /* } else if ([16, 32, 64].indexOf(size) === -1) {
        throw new VerseException('Verse size is not of standard length.'); */
      } else if (typeCheckVerse(phrases)) {
        throw new VerseException('Phrases within the phrase array are not of the Phrase class.');
      } else {
        this.size = size;
        this.phrases = phrases;
      }
    } catch (e) {
      console.error(e);
    }
  }
  rhyme() {
    // Hm.
  }
}
