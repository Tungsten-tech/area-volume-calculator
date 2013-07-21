/*function getSigFigs(numstring){
	var arr = numstring.split('');
	if(arr[arr.length-1]!==0){return (arr.indexOf('.')!==-1) ? arr.length-1 : arr.length}
	else{
		if(arr.indexOf('.')) {return arr.length-1;} 
		else {
			var i = arr.length-1, numzeroes = 0;
			while(arr[i] === 0){numzeroes++; i--;}
			return arr.length-numzeroes;
		}
	}
};*/