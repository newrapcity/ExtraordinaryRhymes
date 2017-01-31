class Verse {
  constructor(size, bars) {
    if (size !== bars.length) {
      throw new VerseException('Purported size of verse does not match amount of bars given.');
    } else if ([16, 32, 64].indexOf(size) === -1) {
      throw new VerseException('Verse size is not of standard length.');
    } else if (bars.forEach(bar => {if (!(bar instanceof Bar)) {return false;}}))
  }
}
