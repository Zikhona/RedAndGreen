var button = document.getElementById("button");
 button.addEventListener("click",function() { 

if(block.className==="red"){
    block.innerHTML = "go";
    block.className = "green";
    button.innerHTML = "Touch me";
}

else if(block.className === "green"){
    block.innerHTML = "Ouch!";
    block.className = "grey";
    button.innerHTML = "Make red";
}  

else { 
    block.className === "green"; 
    block.innerHTML = "stop";
    block.className = "red";
    button.innerHTML = "Make green";
}
  

});
    