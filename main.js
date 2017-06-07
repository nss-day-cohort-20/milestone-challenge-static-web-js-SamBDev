// tree function as required. Logs tree to console
function tree (treeParameters) {

	// loop so the console is logged as heigth parameter indicates
	for (let i = 0; i < treeParameters.height; i++) {
		
		// set up whiteSpace variable so we can call .repeat() on it
		let whiteSpace = " ";

		// calculate the amount of white space need for each line.
		// As there is no need to explicitly log white space after 
		// the characters there is no need to multiply by two
		// only to divide by two later
		let neededWhiteSpace = (treeParameters.height - (i+1));
		
		// console.log(" ".repeat(neededWhiteSpace/2));

		// 
		console.log(`${whiteSpace.repeat(neededWhiteSpace)}${treeParameters.char.repeat(i*2+1)}`);
	}
}

// take input values and assigns them as necessary. Runs when event listener condition met
function userInput(){

	// assign the values of the inputs to temporary variables
	let inputHeight = document.getElementById("treeHeight").value;
	let inputChar = document.getElementById("treeChar").value;

	// console.log("function is called");
	// console.log("input Height is ", inputHeight);
	// console.log("input char is ", inputChar);

	// if either of the fields are empty an alert will be thrown
	if (inputHeight === '' || treeParameters.char === '') {
		alert("Both fields must be given a value!");

	}

	// if both fields are filled then input values will be assigned to an
	// object, as required, called treeParameters. tree function will then
	// be called using the treeParameters object as an argument
	else{
		treeParameters.height = inputHeight;
		treeParameters.char = inputChar;

		tree(treeParameters);	
	}
}

// create an empty object for treeParameters to be used later
const treeParameters = {};

document.getElementById("inputButton").addEventListener("click", userInput);

// document.getElementById("treeHeight").addEventListener("")

