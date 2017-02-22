'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Bar = function () {
  function Bar(line) {
    _classCallCheck(this, Bar);

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

  _createClass(Bar, [{
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'ripLine',
    value: function ripLine() {
      return rip(this.line, false);
    }
  }]);

  return Bar;
}();

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
  }, {
    key: 'rhyme',
    value: function rhyme() {
      var allWords = [];
      var wordSets = [];

      this.bars.forEach(function (bar) {
        var wordArray = bar.ripLine();
        allWords = allWords.concat(wordArray.slice());
      });

      for (var i = 0; i < allWords.length; i++) {
        $.ajax({
          url: '' + api + rhymesWith + '=' + allWords[i]
        }).done(function (rhymeArray) {
          wordSets.push(new Set(rhymeArray.map(function (result) {
            return result['word'];
          })));
        });
      }
    }
  }]);

  return Phrase;
}();

function typeCheckVerse(phrases) {
  var checks = 0;
  var check = phrases.forEach(function (phrase) {
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

var Verse = function () {
  function Verse(size, phrases) {
    _classCallCheck(this, Verse);

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

  _createClass(Verse, [{
    key: 'rhyme',
    value: function rhyme() {
      // Hm.
    }
  }]);

  return Verse;
}();