// Help from: http://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file

$(window).on('load', () => {
  $('#save').on('click', () => {
    const lyrics = `<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Lyrics</title>
  </head>

  <body style="background-color:#FAF2AD;background-image:url(http://sketchoholic.com/uploads/userfiles/18000/fd39c51852_WuTangClan.jpg);background-size:cover;background-blend-mode:color-dodge">
    ${$('#markup')[0].outerHTML}
  </body>

</html>`;

    const uriContent = `data:application/octet-stream, ${encodeURIComponent(lyrics)}`;
    const newWindow = window.open(uriContent, 'lyrics');
  });
});
