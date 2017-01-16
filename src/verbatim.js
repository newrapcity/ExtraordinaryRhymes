/*function write() {
	let lyrics = $("#lyrics").val();
	console.log(lyrics);
}*/

//$(window).on("load", write)

$("#lyrics").on("keypress", function() {
  let lyrics = $("#lyrics").val();
  let wordArray = lyrics.replace(/[\n]/, " ");
  wordArray = wordArray.split(" ");
  let markup = wordArray.map(word => "{" + word + "}");
  $("#markup").html(markup);
});