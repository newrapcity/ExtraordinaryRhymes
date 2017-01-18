/* function write() {
    let lyrics = $("#lyrics").val();
    console.log(lyrics);
} */

// $(window).on("load", write)

// let re = /[^a-zA-Z0-9'’]*/;
// let re = /[\s\n]*/;

// let wordArray = lyrics.replace(/[\n\s]/, "~");
// wordArray = lyrics.replace(/[^a-zA-Z0-9'’~]/, "");
// wordArray = wordArray.split("~");

$('#lyrics').on('keypress', () => {
  const lyrics = $('#lyrics').val();

  const spaces = /[\s\n]/;
  const words = /^[a-zA-Z0-9'‘’!]+$/;
  const endPunct = /[a-zA-Z0-9'‘’!]+[^a-zA-Z0-9'‘’!]$/;
  const startPunct = /^[^a-zA-Z0-9'‘’!][a-zA-Z0-9'‘’!]+/;
  const punct = /[^a-zA-Z0-9'‘’!]/;

  const wordArray = lyrics.split(spaces);
  const newWordArray = [];

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

  const markup = newWordArray.map(word => `{${word}}`);
  $('#markup').html(markup);
});
