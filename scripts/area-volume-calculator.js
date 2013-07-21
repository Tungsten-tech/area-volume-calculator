//Area-Volume Calculator Version 0.1.1.0
var unitmultiplier = {"feet":1, "inches":1/12, "yards":3, "miles":5280, "kilometers":3280.84, "meters":3.28084, "centimeters":0.0328084, "millimeters":0.00328084}; //Based on feet.
var shape = {
	"a_rectangle":{"formula":function(l,w){return l*w;},"power":2,"inputs":["length","width"]},
	"a_square":{"formula":function(s){return Math.pow(r,2);},"power":2,"inputs":["side length"]},
	"a_circle":{"formula":function(r){return Math.PI*Math.pow(r,2);},"power":2,"inputs":["radius"]},
	"a_triangle":{"formula":function(b,h){return 0.5*b*h;},"power":2,"inputs":["base","height"]},
	"v_rightcircularcylinder":{"formula":function(r,h){return Math.PI*Math.pow(r,2)*h;},"power":3,"inputs":["radius","height"]},
	"v_rightrectangularsolid":{"formula":function(l,w,h){return l*w*h;},"power":3,"inputs":["length","width","height"]},
	"v_sphere":{"formula":function(r){return 4*Math.PI*Math.pow(r,3)/3;},"power":3,"inputs":["radius"]},
	"v_rightcircularcone":{"formula":function(r,h){return Math.PI*Math.pow(r,2)*h/3;},"power":3,"inputs":["radius","height"]},
	"v_cube":{"formula":function(s){return Math.pow(s,3);},"power":3,"inputs":["side length"]},
}
function formChange(){
	var dimensions = document.getElementsByClassName("dimensioncontainer");
	for(i=0;i<dimensions.length;i++){dimensions[i].style.display = "none";}
	for(j=0;j<shape[document.getElementById("desiredshape").value].inputs.length;j++){
		dimensions[j].style.display = "block"; 
		dimensions[j].getElementsByTagName("input")[0].value = "Enter the " + shape[document.getElementById("desiredshape").value].inputs[j] + " here!";
	}
}
function calcDimensions(){
	var dimensions = document.getElementsByClassName("dimensioncontainer"), desiredshape = document.getElementById("desiredshape").value; var args = [[1],[1]];
	for(i=0;i<shape[desiredshape].formula.length;i++){
		args[1][i] = dimensions[i].getElementsByTagName('input')[0].value;
		args[0][i] = parseFloat(dimensions[i].getElementsByTagName('input')[0].value) * unitmultiplier[dimensions[i].getElementsByTagName('select')[0].value];
	}
	var result = shape[desiredshape].formula.apply(null,args[0]) * (1/Math.pow(unitmultiplier[document.getElementById("desiredunit").value],shape[desiredshape].power));
	document.getElementById("calcresult").innerHTML = "The result is " + result + " " + document.getElementById("desiredunit").value + "<sup>" + shape[desiredshape].power + "</sup>"; 
}