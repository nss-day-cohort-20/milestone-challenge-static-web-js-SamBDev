function tree (treeParameters) {
	for (let i = 0; i < treeParameters.height; i++) {
		let whiteSpace = " ";
		let neededWhiteSpace = (treeParameters.height - (i+1));
		
		// console.log(" ".repeat(neededWhiteSpace/2));
		console.log(`${whiteSpace.repeat(neededWhiteSpace)}${treeParameters.char.repeat(i*2+1)}`);
	}
}

function userInput(){

	let inputHeight = document.getElementById("treeHeight").value;
	let inputChar = document.getElementById("treeChar").value;

	console.log("function is called");
	console.log("input Height is ", inputHeight);
	console.log("input char is ", inputChar);

	if (inputHeight === '' || treeParameters.char === '') {
		alert("Both fields must be given a value!");

	}

	else{
		treeParameters.height = inputHeight;
		treeParameters.char = inputChar;

		tree(treeParameters);	
	}
}

const treeParameters = {};

document.getElementById("inputButton").addEventListener("click", userInput);

// document.getElementById("treeHeight").addEventListener("")

