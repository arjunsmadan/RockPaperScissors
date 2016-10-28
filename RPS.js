document.getElementById("rock").addEventListener("click", function(){
	submit("rock");
}, false);
document.getElementById("paper").addEventListener("click", function(){
	submit("paper");
}, false);
document.getElementById("scissors").addEventListener("click", function(){
	submit("scissors");
}, false);

var computerChoice;
var computerChoiceNum;
var results;
var tieCount = 0;
var winCount = 0;
var loseCount = 0;


function submit(userChoice){ 
	results = " ";
	computerChoice;
	computerChoiceNum = Math.random();
	if (computerChoiceNum < .34){
		computerChoice = "rock";
	}
	else if (computerChoiceNum < .67){
		computerChoice = "paper";
	}
	else{
		computerChoice = "scissors";
	}
	console.log(computerChoice);
	console.log(userChoice);
	
	if (computerChoice === userChoice){
		results = "You Tied! Not bad...";
		tieCount++;
	}//Tie

	else{ 
		if (userChoice === "rock"){
			if (computerChoice === "paper"){
				results = "Rough...you lost!";
				loseCount++;
			}
			else{
				results = "Awesome!! You won!";
				winCount++;
			}
		}
		else if (userChoice === "paper"){
			if (computerChoice === "scissors"){
				results = "Rough...you lose!";
				loseCount++;
			}
			else{
				results = "Awesome!! You won!";
				winCount++;
			}
		}
		else{
			if (computerChoice === "rock"){
				results = "Rough...you lose!";
				loseCount++;
			}
			else{
				results = "Awesome!! You won!";
				winCount++;
			}
		}
	}//other cases 'if' statement end
	var userChoiceF = document.getElementById("userC");
	userChoiceF.innerHTML = "You chose " + userChoice;
	var computerChoiceF = document.getElementById("computerC");
	computerChoiceF.innerHTML = "The computer chose " + computerChoice;
	var resultsF = document.getElementById("result");
	resultsF.innerHTML = results;
	var ratioF = document.getElementById("ratio");
	var winCountS = winCount.toString();
	var loseCountS = loseCount.toString();
	var tieCountS = tieCount.toString();
	ratioF.innerHTML = "Your Win / Loss / Tie Ratio is: " + winCountS + " / " + loseCountS + " / " +tieCountS;
	
}

