var myButton = document.getElementById('button');
var count = 0;
var myBlock = document.getElementById('block');

myButton.addEventListener('click', function() {
	count += 1;
		switch(count) {
			case 1 :
			myBlock.className = "grey";
			myBlock.innerHTML = "Ouch!";
			myButton.innerHTML = "make red";
			break;

			case 2 :
			myBlock.className = "red";
			myBlock.innerHTML = "stop";
			myButton.innerHTML = "Make green";
			break;

			case 3 :
			myBlock.className = "green";
			myBlock.innerHTML = "go";
			myButton.innerHTML = "Touch me";
			count = 0;
			break;
		}		
});