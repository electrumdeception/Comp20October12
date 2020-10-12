// JavaScript Document


function runProgram (){
	var randNums = [0,0,0,0,0];
	var luckyBall;
	var luckyInput;
	var myInput;
	var matchingNums;
	var winnings;
	randNums = fillArray(randNums);
	luckyBall = GetLucky();
	randNums = sortandDisplay(randNums);
	myInput = getInput();
	luckyInput = prompt("please enter a lucky number", "14");
	matchingNums = compareNumbers(luckyInput, luckyBall, randNums,myInput);
	winnings = calculateWinnings(matchingNums, luckyNum, luckyBall);
	return winnings;
}

//fills randNums with 5 random integers between 1 and 48
function fillArray (randNums){
  randNums[0] = Math.floor(Math.random() * (48) + 1);
  randNums[1] = Math.floor(Math.random() * (48) + 1);
  randNums[2] = Math.floor(Math.random() * (48) + 1);
  randNums[3] = Math.floor(Math.random() * (48) + 1);
  randNums[4]= Math.floor(Math.random() * (48) + 1);
  return randNums;
}

//Gets a random lucky ball value
function GetLucky(){
	var luckyBall;
	luckyBall = Math.floor(Math.random() * (18) + 1);
	return luckyBall;
}

//sorts and display numbers
function sortandDisplay (randNums){
	randNums.sort();
	var i;
	for (i = 0; i < randNums.length; i++)
	{
		document.write(randNums[i], ", ");
	}
		return randNums;
}

//get user input on winning lottery values
function getInput (){
	var myInput;
	myInput = prompt("please enter 5 nums with spaces", "1 1 1 1 1");
	myInput.split(" "); 
	return myInput;
}


//compare numbers
function compareNumbers(luckyInput, luckyBall, randNums,myInput){
var matching = 0;
var j;
var i;
for (i = 0; i<randNums.length;i++){
	for (j=0;j<myInput.length; j++){
		if (randNums[i]==myInput[j])
		{
			matching++;
		}
	}
}
return matching;
}


function calculateWinnings(matching, luckyNum, luckyBall){
if (luckyNum == luckyBall){
	switch (matching){
      case 0:
          document.write("You win $4");
          break;
      case 1:
          document.write("You win $6")
          break;
      case 2:
          document.write("You win $25")
          break;
      case 3:
          document.write(" You win $150")
          break;
      case 4:
          document.write("You win $5000");
          break;
      case 5:
          document.write("you win  $7,000 a WEEK for LIFE");
          break;
		default:
			document.write("You win NO MONEY!");
	}
}
else {
	switch (matching){
      case 2:
          document.write("You win $2")
          break;
      case 3:
          document.write(" You win $20")
          break;
      case 4:
          document.write("You win $200");
          break;
      case 5:
          document.write("you win  $25000 a year for LIFE");
          break;
		default:
			document.write("You win NO MONEY");
			
	}
}
}
