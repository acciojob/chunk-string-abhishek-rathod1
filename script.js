function stringChop(str, size) {
  // your code here
	if (!str) return [];
	size = Number(size);
	if (isNaN(size) || size <= 0) return [str]; // handle invalid sizes
	if (size <= 0) return [str]; // invalid size fallback
	
	let result =[];
	for(let i = 0; i<str.length; i=i+size){
		result.push(str.slice(i,i+size));
	}
	return result;
}

// Do not change the code belowh
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
