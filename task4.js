var myButton = document.getElementById('button');
<<<<<<< HEAD
	var count = 0;
	var myBlock = document.getElementById('block');

	myButton.addEventListener('click', function() {
	count += 1;
		switch(count) {
			
		case 1 :
			myBlock.className = "grey"; //without this class here there is alot of uncertainty!
			myBlock.innerHTML = "Ouch!";
			myButton.innerHTML = "Make red";
			break;

		case 2 :
=======
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
>>>>>>> master
			myBlock.className = "red";
			myBlock.innerHTML = "stop";
			myButton.innerHTML = "Make green";
			break;

<<<<<<< HEAD
		case 3 :
			myBlock.className = "green";
			myBlock.innerHTML = "go";
			myButton.innerHTML = "Touch me"
=======
			case 3 :
			myBlock.className = "green";
			myBlock.innerHTML = "go";
			myButton.innerHTML = "Touch me";
>>>>>>> master
			count = 0;
			break;
		}		
});