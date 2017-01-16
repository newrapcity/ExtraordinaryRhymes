/*function write() {
	let lyrics = $("#lyrics").val();
	console.log(lyrics);
}*/

//$(window).on("load", write)

$("#lyrics").on("keypress", function() {
  let lyrics = $("#lyrics").val();
  $("#markup").html(lyrics);
});