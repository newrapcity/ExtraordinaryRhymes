'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function typeCheckPhrase(bars) {
  var checks = 0;
  var check = bars.forEach(function (bar) {
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

var Phrase = function () {
  function Phrase(bars) {
    _classCallCheck(this, Phrase);

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

  _createClass(Phrase, [{
    key: 'print',
    value: function print() {
      for (var i = 0; i < this.bars.length; i++) {
        console.log(this.bars[i].getLine());
      }
      console.log('\n');
    }
  }]);

  return Phrase;
}();