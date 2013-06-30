var unitmultiplier = {"feet":1, "inches":1/12, "yards":3, "miles":5280, "kilometers":3280.84, "meters":3.28084, "centimeters":0.0328084, "millimeters":0.00328084}; //Based on feet.
function formToggle(){
	var dimension3 = document.getElementsByClassName("dimensioncontainer")[2];
	if(dimension3.style.display == "block"){dimension3.style.display = "none"; document.getElementById("formtoggle").value = "Calculate Volume!";}
	else{dimension3.style.display = "block"; document.getElementById("formtoggle").value = "Calculate Area!";}
}
function calcDimensions(){
	var dimensions = document.getElementsByClassName("dimensioncontainer"), result = 1, power = 0;
	for(i=0;i<dimensions.length;i++){if(dimensions[i].style.display != "none"){var unit = dimensions[i].getElementsByTagName('select')[0].value; result *= (dimensions[i].getElementsByTagName('input')[0].value * unitmultiplier[unit]); power++;}}
	result = result * (1/Math.pow(unitmultiplier[document.getElementById("desiredunit").value],power));
	document.getElementById("calcresult").innerHTML = "The result is " + result + " " + document.getElementById("desiredunit").value + "<sup>" + power + "</sup>"; 
}