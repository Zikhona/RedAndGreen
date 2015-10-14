
var redbutton = document.getElementById("redbutton");
redbutton.addEventListener("click", function () {
	var block = document.getElementById("block");
	block.className = "red";
	block.innerHTML = "stop";
});



var greenbutton = document.getElementById("greenbutton");
greenbutton.addEventListener("click", function () {
	var block = document.getElementById("block");
	block.className = "green";
	block.innerHTML = "go";
});