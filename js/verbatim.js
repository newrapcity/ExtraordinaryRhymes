"use strict";

/*function write() {
	let lyrics = $("#lyrics").val();
	console.log(lyrics);
}*/

//$(window).on("load", write)

$("#lyrics").on("keypress", function () {
  var lyrics = $("#lyrics").val();
  var wordArray = lyrics.replace(/[\n]/, " ");
  wordArray = wordArray.split(" ");
  var markup = wordArray.map(function (word) {
    return "{" + word + "}";
  });
  $("#markup").html(markup);
});