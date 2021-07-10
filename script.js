// array of choices to choose from
var choices = ["rock", "paper", "scissor"];
var UserPoints = 0;
var ComputerPoints = 0;

function computerTurn() {
	// function to generate a random number between 0-2
	// as an input of computer from choices array
	return choices[Math.floor(Math.random() * 3)];
}

function main(UserChoice) {
	// function to implement rules of stone paper scissor
	let CompChoice = computerTurn();

	// to update the choices of players they choosed
	document.getElementById("userSign").innerHTML = display(UserChoice);
	document.getElementById("compSign").innerHTML = display(CompChoice);

	if ((UserChoice === "paper" && CompChoice === "rock") || (UserChoice === "rock" && CompChoice === "scissor") || (UserChoice === "scissor" && CompChoice === "paper")) {
		// if user wins
		win();
	} else if (UserChoice === CompChoice) {
		// if user and computer has same choice
		draw();
	} else {
		// if user losses
		lose();
	}

	// to update the scores of players
	document.getElementById('userScore').innerText = UserPoints;
	document.getElementById('compScore').innerText = ComputerPoints;
}

function display(choose) {
	// function to chance the choice they selected
	if (choose === "rock")
		return '<i class="fa fa-hand-grab-o text-white text-center pt-4 rounded-circle"></i>';
	else if (choose === "paper")
		return '<i class="fa fa-hand-paper-o text-white text-center pt-4 rounded-circle"></i>';
	else
		return '<i class="fa fa-hand-scissors-o text-white text-center pt-4 rounded-circle"></i>';
}

function win() {
	// if user wins
	UserPoints++;
	document.getElementById("result_text").innerHTML = "You win!";
}

function draw() {
	// if user and computer have same choice
	document.getElementById("result_text").innerHTML = "It's a Draw.";
}

function lose() {
	// if user looses
	ComputerPoints++;
	document.getElementById("result_text").innerHTML = "You lose!";
}