/* Exercise 2: Color picker */
function setPreviewColor(color) {
$(".preview").css({backgroundColor:color});
var rgb = $(".preview").css("backgroundColor");
$(".color-code").text(rgb);
}
setPreviewColor("purple");
$("#color").keyup(function(){
	var color =$('input#color').val();
	console.log(color);
	setPreviewColor(color);
})
function addBox(color){
	
	$("#colors").prepend("<div class='item' style='background-color: " + color + ";'></div>")
}
$("#add-to-favorite").click(function(){
	var color = $(".preview").css("backgroundColor");
	addBox(color);
})
var colors =["2ecc71","c0392b","1abc9c","d35400","34495e","e67e22","bdc3c7","f1c40f","7f8c8d","2980b9"]
$.each(colors,function(position, color){
	addBox(color)
})
var random_position= Math.floor(Math.random()*colors.length)
var color= colors[random_position]
setPreviewColor(color)