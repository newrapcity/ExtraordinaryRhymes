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

var Word = function () {
  function Word(word) {
    _classCallCheck(this, Word);

    this.word = word;
    this.rhymed = false;
    this.color = null;
  }

  _createClass(Word, [{
    key: 'rhyme',
    value: function rhyme(color) {
      this.rhymed = true;
      this.color = color;
    }
  }]);

  return Word;
}();

var Ink = function () {
  function Ink() {
    _classCallCheck(this, Ink);

    this.colors = ['#ED0A3F', '#FF3F34', '#FF861F', '#FBE870', '#C5E17A', '#01A368', '#76D7EA', '#0066FF', '#8359A3'];
    this.used = Array(this.colors.length).fill(false);
    this.index = 0;
  }

  _createClass(Ink, [{
    key: 'dab',
    value: function dab() {
      return this.colors[this.index];
    }
  }, {
    key: 'use',
    value: function use() {
      this.index += 1;
      this.used[this.index] = true;
    }
  }, {
    key: 'used',
    value: function used() {
      return this.index >= this.colors.length;
    }
  }]);

  return Ink;
}();

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
  }, {
    key: 'wordLine',
    value: function wordLine() {
      return rip(this.line, false).map(function (word) {
        return new Word(word);
      });
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
      var words = [];
      var rhymes = [];
      var crayons = new Ink();

      this.bars.forEach(function (bar, index) {
        var wordArray = bar.wordLine();
        wordArray.push(new Word('\n'));
        words = words.concat(wordArray.slice());
      });

      words.forEach(function (word) {
        var request = new XMLHttpRequest();
        request.open('GET', '' + api + rhymesWith + '=' + word.word, false);
        request.send(null);

        var rhymeArray = JSON.parse(request.responseText);
        rhymes.push(rhymeArray.map(function (result) {
          return result['word'];
        }).slice());
      });

      for (var i = 0; i < words.length; i++) {
        var dirtyBrush = false;
        for (var k = i + 1; k < words.length; k++) {
          if (words[i].rhymed === words[k].rhymed && words[k].rhymed === false) {
            if ($.inArray(words[k].word, rhymes[i]) !== -1) {
              words[i].rhyme(crayons.dab());
              words[k].rhyme(crayons.dab());
              dirtyBrush = true;
            }
          }
        }
        if (dirtyBrush) {
          crayons.use();
        }
      }

      return words;
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
      var html = '';
      this.phrases.forEach(function (phrase) {
        var words = phrase.rhyme();
        words.forEach(function (word) {
          if (word.word === '\n') {
            html += '<br>';
          } else {
            if (word.rhymed) {
              var highlight = '<span style="background-color: ' + word.color + '">' + word.word + '</span>';
              html += highlight;
              html += ' ';
            } else {
              html += word.word;
              html += ' ';
            }
          }
        });
        html += '<br>';
      });
      return html;
    }
  }]);

  return Verse;
}();