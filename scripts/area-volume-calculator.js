//Area-Volume Calculator Version 0.1.1.0
var unitmultiplier = {"feet":1, "inches":1/12, "yards":3, "miles":5280, "kilometers":3280.84, "meters":3.28084, "centimeters":0.0328084, "millimeters":0.00328084}; //Based on feet.
var shape = {
	"p_rectangle":{"formula":function(l,w){return 2*l+2*w;},"power":1,"inputs":["length","width"]},
	"p_square":{"formula":function(s){return 4*s;},"power":1,"inputs":["side length"]},
	"p_circle":{"formula":function(r){return 2*Math.PI*r;},"power":1,"inputs":["radius"]},	
	"a_rectangle":{"formula":function(l,w){return l*w;},"power":2,"inputs":["length","width"]},
	"a_square":{"formula":function(s){return Math.pow(r,2);},"power":2,"inputs":["side length"]},
	"a_circle":{"formula":function(r){return Math.PI*Math.pow(r,2);},"power":2,"inputs":["radius"]},
	"a_triangle":{"formula":function(b,h){return 0.5*b*h;},"power":2,"inputs":["base","height"]},
	"v_rightcircularcylinder":{"formula":function(r,h){return Math.PI*Math.pow(r,2)*h;},"power":3,"inputs":["radius","height"]},
	"v_rightrectangularsolid":{"formula":function(l,w,h){return l*w*h;},"power":3,"inputs":["length","width","height"]},
	"v_sphere":{"formula":function(r){return 4*Math.PI*Math.pow(r,3)/3;},"power":3,"inputs":["radius"]},
	"v_rightcircularcone":{"formula":function(r,h){return Math.PI*Math.pow(r,2)*h/3;},"power":3,"inputs":["radius","height"]},
	"v_cube":{"formula":function(s){return Math.pow(s,3);},"power":3,"inputs":["side length"]},
	"sa_rightcircularcylinder":{"formula":function(r,h){return 2*Math.PI*Math.pow(r,2) + 2*Math.PI*r*h;},"power":2,"inputs":["radius","height"]},
	"sa_rightrectangularsolid":{"formula":function(l,w,h){return 2*l*w + 2*l*h + 2*h*w;},"power":2,"inputs":["length","width","height"]},
	"sa_sphere":{"formula":function(r){return 4*Math.PI*Math.pow(r,2);},"power":2,"inputs":["radius"]},
	"sa_rightcircularcone":{"formula":function(r,s){return Math.PI*Math.pow(r,2) + Math.PI*r*s;},"power":2,"inputs":["radius","slant height"]},
	"sa_cube":{"formula":function(s){return 6*Math.pow(s,2);},"power":2,"inputs":["side length"]}
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
	var dimensions = document.getElementsByClassName("dimensioncontainer"), desiredshape = document.getElementById("desiredshape").value, args = [], sigfigs = [];
	for(i=0;i<shape[desiredshape].formula.length;i++){
		sigfigs[i] = getSigFigs(dimensions[i].getElementsByTagName('input')[0].value) || 21;
		args[i] = parseFloat(dimensions[i].getElementsByTagName('input')[0].value) * unitmultiplier[dimensions[i].getElementsByTagName('select')[0].value];
	}
	var result = parseFloat((shape[desiredshape].formula.apply(null,args) * (1/Math.pow(unitmultiplier[document.getElementById("desiredunit").value],shape[desiredshape].power))).toPrecision(sigfigs.sort(function(a,b){return a-b;})[0]));
	var power = (shape[desiredshape].power === 1) ? "" : shape[desiredshape].power;
	if(!result && result !== 0) {document.getElementById("calcresult").innerHTML = "ERROR: All inputs must be numbers."}
	else{document.getElementById("calcresult").innerHTML = "The result is " + result + " " + document.getElementById("desiredunit").value + "<sup>" + power + "</sup>.";}
}
function getSigFigs(numstring){
	if(document.getElementById("sigfigsinput").checked){
		numstring = numstring.replace( /^0+/, '');
		return ( /\./.test(numstring) )? numstring.length - 1 : (numstring.match(/[^0](\d*[^0])?/) || [''])[0].length;
	}
}