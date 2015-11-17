//     Check that the div with id testresult doesn't have the class failing or passing. 
// Use console.log to display a message that tells you what the result of the check was. 
		var targetId = document.getElementById("testresult");

// Call setTestStatus('testresult', 'testbutton', 'failing');
if(targetId.className === "grey"){
   console.log("the class name is 'grey' which is correct : " + targetId.className);
} 
else {
    console.log("somethng is wrong the className should not be : " );
};

//Check that the button has the text 'Make failing'.
		var myButton = document.getElementById("button");

if (myButton.innerHTML === "Make failing"){
 console.log (" button 'Make failing' is correct");
}
else {
 console.log("something'fishy'is happening : " + myButton.innerHTML);
};

// Call setTestStatus('testresult', 'testbutton', 'passing');.
	setTestStatus('testresult', 'testbutton', 'failing');

//Check that #testresult has the class failing. The CSS should give it a red background.
if(targetId.className === "failing"){
   console.log("the class name is 'failing' which is correct");
} 
else {
    console.log("hm... somethng is wrong the className should not be : " + targetId.className);
};

//     Check that the button has the text 'Make passing'.
		var mybutton = document.getElementById("button");

if (button.innerHTML === "Make passing"){
 console.log (" button 'Make passing' is correct");
}
else {
 console.log("uhm.... button not correct : " + myButton.innerHTML);
};

// Call setTestStatus('testresult', 'testbutton', 'passing');.

	setTestStatus('testresult', 'testbutton', 'passing');

//     Check that #testresult has the class passing. The CSS should give it a green background.
if(targetId.className === "passing"){
   console.log("the class name is 'passing' which is correct");
} 
else {
    console.log("hm... somethng is wrong the className should not be : " + targetId.className);
};
//     Check that the button has the text 'Make failing'.
		var myButton = document.getElementById("button");

if (myButton.innerHTML === "Make failing"){
 console.log (" button 'Make failing' is correct");
}
else {
 console.log("something'fishy'is happening : " + myButton.innerHTML);
};
//     Display 'success' if testresult has the class passing, otherwise display 'failure'.
	if(targetId.className === "passing"){
   console.log("success");
	} 
	else {
    console.log("failure : " + targetId.className);
	};

