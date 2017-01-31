'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function typeCheck(bars) {
  var checks = 0;
  var typeCheck = bars.forEach(function (bar) {
    if (!(bar instanceof Bar)) {
      return false;
    }
    checks++;
    if (checks === bars.length) {
      return true;
    }
  });
}

var Verse = function Verse(size, bars) {
  _classCallCheck(this, Verse);

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
};