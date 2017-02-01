'use strict';

function process(song) {
  var blah = [];

  song.forEach(function (bar, index) {
    bar = bar.join(' ');
    bar = new Bar(bar);
    song[index] = $.extend(true, {}, bar);
  });

  var phrase = [];
  for (var i = 0; i < song.length; i++) {
    phrase.push($.extend(true, {}, song[i]));
    if ((i + 1) % 4 === 0) {
      phrase = new Phrase(phrase);
      blah.push($.extend(true, {}, phrase));
      phrase = [];
    }
  }

  for (var _i = 0; _i < blah.length; _i++) {
    blah[_i].print();
  }
};