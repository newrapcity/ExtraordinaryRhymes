function typeCheck(bars) {
  let checks = 0;
  const check = bars.forEach((bars) => {
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
    if (bars.length !== 4) {
      throw new PhraseException('Phrase must consist of four Bars.');
    } else if (!typeCheck(bars)) {
      throw new PhraseException('Phrase object must consist four Bar objects.');
    } else {
      this.bars = bars;
    }
  }
  print() {
    for (let i = 0; i < bars.length; i++) {
      console.log(this.bars[i].getLine());
    }
  }
}
