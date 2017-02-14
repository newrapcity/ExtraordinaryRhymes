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
    this.bars.forEach((bar) => {
      const wordArray = bar.ripLine();
      
      for (let i = 0; i < wordArray.length; i++) {
        for (let k = i + 1; k < wordArray.length; k++) {
          // Work later.
        }
      }
    });
  }
}
