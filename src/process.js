function process(song) {
  let blah = [];

  song.forEach((bar, index) => {
    bar = bar.join(' ');
    bar = new Bar(bar);
    song[index] = $.extend(true, {}, bar);
  });

  let phrase = [];
  for (let i = 0; i < song.length; i++) {
    phrase.push($.extend(true, {}, song[i]));
    if ((i + 1) % 4 === 0) {
      phrase = new Phrase(phrase);
      blah.push($.extend(true, {}, phrase));
      phrase = [];
    }
  }

  for (let i = 0; i < blah.length; i++) {
    blah[i].print();
  }
};
