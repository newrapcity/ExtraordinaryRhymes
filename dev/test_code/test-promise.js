  asyncAsk(word, words, index) {
    $.ajax({
      url: `${api}${perfectRhyme}=${word.word}`,
    }).done((data) => {
      let dirtyBrush = false;
      const rhymes = data.map(result => result.word);
      for (let i = index + 1; i < words.length; i++) {
        if (!words[i].rhymed) {
          if ($.inArray(words[i].word.toLowerCase(), rhymes) !== -1) {
            if (!words[index].rhymed) words[index].rhyme(crayons.dab());
            words[i].rhyme(crayons.dab());
            dirtyBrush = true;
          } else if (words[k].word === words[i].word) {
            words[k].rhyme(crayons.dab());
            dirtyBrush = true;
          } /* else if (words[k].word === words[i].word) {
            words[k].redact(); */
          }
        }
      }
      if (dirtyBrush) {
        crayons.use();
      }
      index += 1;
      if (index === words.length) {
        return words;
      } else {
        asyncAsk(words[index], words, index);
      }
    });
  }

  rhyme() {
    let words = [];
    const crayons = new Ink();

    this.bars.forEach((bar) => {
      const wordArray = bar.wordLine();
      wordArray.push(new Word('\n'));
      words = words.concat(wordArray.slice());
    });

    let index = 0;

    asyncAsk(words[index], words, index);

    while (!asyncAsk(words[index], words, index));
  }
