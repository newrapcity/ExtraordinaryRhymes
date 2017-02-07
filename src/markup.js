const song = [];

$('#lyrics').on('keypress', () => {
  const lineArray = $('#lyrics').val().split(newline);
  let lyrics = '';
  let index = 0;

  lineArray.forEach((line) => {
    const withoutPunct = rip(line, false);
    line += "\n";
    lyrics += line;

    if (withoutPunct.length > 0) {
      song[index] = withoutPunct.slice();
      index += 1;
    }
  });

  VerseProcess(song);
  $('#markup').html(lyrics);
});

$('#lyrics').on('select', (text) => {
  console.log(text);
});
