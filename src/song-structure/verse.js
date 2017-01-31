function typeCheck(bars) {
  let checks = 0;
  let typeCheck = bars.forEach(bar => {
    if (!(bar instanceof Bar)) {
      return false; 
    }
    checks++;
    if (checks === bars.length) {
      return true;
    }
  });
}

class Verse {
  constructor(size, bars) {
    if (size !== bars.length) {
      throw new VerseException('Purported size of verse does not match amount of bars given.');
    } else if ([16, 32, 64].indexOf(size) === -1) {
      throw new VerseException('Verse size is not of standard length.');
    } else if (!typeCheck(bars)) {
      throw new VerseException('Bars within the bar array are not of the Bar class.');
    } else {
      this.size = size;
      this.bars = bars;
    }
  }
}
