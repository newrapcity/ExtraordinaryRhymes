function typeCheck(phrases) {
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
    if (size !== phrases.length * 4) {
      throw new VerseException('Purported size of verse does not match amount of bars given.');
    } else if ([16, 32, 64].indexOf(size) === -1) {
      throw new VerseException('Verse size is not of standard length.');
    } else if (!typeCheck(phrases)) {
      throw new VerseException('Phrases within the phrase array are not of the Phrase class.');
    } else {
      this.size = size;
      this.phrases = phrases;
    }
  }
}
