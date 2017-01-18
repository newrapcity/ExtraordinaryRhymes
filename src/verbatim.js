$('#lyrics').on('keypress', () => {
  let lyrics = $('#lyrics').val();

  const space = /[\s]/;
  const newline = /[\n]/;
  const words = /^[a-zA-Z0-9'‘’!]+$/;
  const endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
  const startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
  const punct = /[^a-zA-Z0-9'‘’!]/;

  const lineArray = lyrics.split(newline);
  lyrics = '';
  let wordArray = [];
  let newWordArray = [];

  lineArray.forEach((line) => {
    newWordArray = [];
    wordArray = line.split(space);
    wordArray.forEach((word) => {
      if (words.test(word)) {
        newWordArray.push(word);
        // console.log(word);
      } else if (startPunct.test(word) || endPunct.test(word)) {
        const stripWord = word.replace(punct, '');
        newWordArray.push(stripWord);
        // console.log(stripWord);
      } else {
        // Pass.
      }
    });
    newWordArray = newWordArray.join(' ');
    newWordArray += '\n';
    // console.log(newWordArray);
    lyrics += newWordArray;
  });

  // const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(lyrics);
});
