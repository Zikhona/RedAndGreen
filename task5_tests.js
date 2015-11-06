//     Check that the div with id testresult doesn't have the class failing or passing. 
// Use console.log to display a message that tells you what the result of the check was. 
var targetId = document.getElementById("testresult");
// Call setTestStatus('testresult', 'failing');.

if(targetId.className === "grey"){
   console.log("the class name is 'grey' which is correct : " + targetId.className);
} 
else {
    console.log("somethng is wrong the className should not be : " );
};

//Check that the button has the text 'Make red'.
var myButton = document.getElementById("button");

if (myButton.innerHTML === "Make red"){
 console.log (" button 'Make red' is correct");
}
else {
 console.log("something'fishy'is happening : " + myButton.innerHTML);
};

//Call setTestStatus('testresult', 'failing');.  
setTestStatus("testresult", "failing");

//Check that #testresult has the class failing. The CSS should give it a red background.
if(targetId.className === "failing"){
   console.log("the class name is 'failing' which is correct");
} 
else {
    console.log("hm... somethng is wrong the className should not be : " + targetId.className);
};

//     Check that the button has the text 'Make green'.



//     Call setTestStatus('testresult', 'passing');.
//     Check that #testresult has the class passing. The CSS should give it a green background.
//     Check that the button has the text 'Make red'.
//     Display 'success' if testresult has the class passing, otherwise display 'failure'.

