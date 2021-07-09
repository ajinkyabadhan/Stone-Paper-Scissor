var choices = ["rock", "paper", "scissor"];
var UserPoints = 0;
var ComputerPoints = 0;

function computerTurn() {
	return choices[Math.floor(Math.random() * 3)];
}

function main(UserChoice) {
	let CompChoice = computerTurn();

	document.getElementById("userSign").innerHTML = display(UserChoice);
	document.getElementById("compSign").innerHTML = display(CompChoice);

	if ((UserChoice === "paper" && CompChoice === "rock") || (UserChoice === "rock" && CompChoice === "scissor") || (UserChoice === "scissor" && CompChoice === "paper")) {
		win();
	} else if (UserChoice === CompChoice) {
		draw();
	} else {
		lose();
	}

	document.getElementById('userScore').innerText = UserPoints;
	document.getElementById('compScore').innerText = ComputerPoints;
}

function display(choose) {
	if (choose === "rock")
		return '<i class="fa fa-hand-grab-o text-white text-center pt-4 rounded-circle"></i>';
	else if (choose === "paper")
		return '<i class="fa fa-hand-paper-o text-white text-center pt-4 rounded-circle"></i>';
	else
		return '<i class="fa fa-hand-scissors-o text-white text-center pt-4 rounded-circle"></i>';
}

function win() {
	UserPoints++;
	document.getElementById("result_text").innerHTML = "You win!";
}

function draw() {
	document.getElementById("result_text").innerHTML = "It's a Draw.";
}

function lose() {
	ComputerPoints++;
	document.getElementById("result_text").innerHTML = "You lose!";
}