// JavaScript Document


function runProgram (){
	var randNums = [0,0,0,0,0];
	var luckyBall;
	var luckyInput;
	var myInput = [0,0,0,0,0];
	var matchingNums;
	var winnings;
	randNums = fillArray(randNums);
	
	luckyBall = GetLucky();
	randNums = sortandDisplay(randNums);
	addendum("lucky", luckyBall);
	myInput = getInput(myInput);
	luckyInput = prompt("please enter a lucky number", "14");
	matchingNums = compareNumbers(luckyInput, luckyBall, randNums,myInput);
	winnings = calculateWinnings(matchingNums, luckyInput, luckyBall);
	addendum("winners", myInput);
	addendum("luckyWin", luckyInput);
	addendum("amountWon", winnings);
	return;
}

function addendum(idIs, whichString)
{
	var newText = document.createTextNode(whichString);
	var element = document.getElementById(idIs);
	element.appendChild(newText);
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
	randNums.sort(function(a, b){return a - b});
	
	var i;
	var mixed = "";
	for (i = 0; i < randNums.length; i++)
	{
		var textMine = randNums[i].toString();
		mixed = mixed.concat(textMine,",");
	}
	
		var displayReplace = document.createElement("p");
		var newText = document.createTextNode(mixed);
		displayReplace.appendChild(newText);
		var element = document.getElementById("one");
		element.appendChild(displayReplace);
		
		return randNums;
}

//get user input on winning lottery values
function getInput (myInput){
	var newPut;
	myInput = prompt("please enter 5 nums with spaces", "1 1 1 1 1");
	newPut = myInput.split(" "); 
	return newPut;
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
	var prize;
if (luckyNum == luckyBall){
	switch (matching){
      case 0:
          prize ="You win $4";
          break;
      case 1:
          prize ="You win $6";
          break;
      case 2:
          prize ="You win $25";
          break;
      case 3:
          prize =" You win $150";
          break;
      case 4:
          prize ="You win $5000";
          break;
      case 5:
          prize ="you win  $7,000 a WEEK for LIFE";
          break;
		default:
			prize ="You win NO MONEY!";
			break;
	}
}
else {
	switch (matching){
      case 2:
          prize ="You win $2";
          break;
      case 3:
          prize =" You win $20";
          break;
      case 4:
          prize ="You win $200";
          break;
      case 5:
         prize ="you win  $25000 a year for LIFE";
          break;
		default:
			prize ="You win NO MONEY";
			break;
			
	}
	
}
	return prize;
}
