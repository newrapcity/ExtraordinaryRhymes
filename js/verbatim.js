"use strict";

/*function write() {
	let lyrics = $("#lyrics").val();
	console.log(lyrics);
}*/

//$(window).on("load", write)

$("#lyrics").on("keypress", function () {
  var lyrics = $("#lyrics").val();
  $("#markup").html(lyrics);
});