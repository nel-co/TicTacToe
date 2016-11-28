const s1 = document.getElementById('s-1'),
	s2 = document.getElementById('s-2'),
	s3 = document.getElementById('s-3'),
	s4 = document.getElementById('s-4'),
	s5 = document.getElementById('s-5'),
	s6 = document.getElementById('s-6'),
	s7 = document.getElementById('s-7'),
	s8 = document.getElementById('s-8'),
	s9 = document.getElementById('s-9');

const playerChoiceX = document.querySelector('.xs'),
	playerChoiceO = document.querySelector('.os');

var player,
	ai,
	playerPiece,
	aiPiece,
	
	playerTurn,
	
	aiMove,	
	board = [s1,s2,s3,s4,s5,s6,s7,s8,s9];

playerChoiceX.addEventListener('click', function() {
	document.querySelector('.container').style.display = 'flex';
	document.querySelector('.game-container').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	player = 'X';
	playerPiece = '<span class="x">X</span>';
	ai = 'O';
	aiPiece = '<span class="o">O</span>';
	playerTurn = true;
})

playerChoiceO.addEventListener('click', function() {
	document.querySelector('.container').style.display = 'flex';
	document.querySelector('.game-container').style.display = 'block';
	document.querySelector('.choice').style.display = 'none';
	player = 'O';
	playerPiece = '<span class="o">O</span>';
	ai = 'X';
	aiPiece = '<span class="x">X</span>';
	playerTurn = false;
	setTimeout(aiTurn,1000);
})

	s1.addEventListener('click', playerMove);
	s2.addEventListener('click', playerMove);
	s3.addEventListener('click', playerMove);
	s4.addEventListener('click', playerMove);
	s5.addEventListener('click', playerMove);
	s6.addEventListener('click', playerMove);
	s7.addEventListener('click', playerMove);
	s8.addEventListener('click', playerMove);
	s9.addEventListener('click', playerMove);

function checkWinner() {
	// Player Victories
	if(s1.innerHTML == playerPiece && s2.innerHTML == playerPiece && s3.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s1.innerHTML == playerPiece && s4.innerHTML == playerPiece && s7.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s1.innerHTML == playerPiece && s5.innerHTML == playerPiece && s9.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s2.innerHTML == playerPiece && s5.innerHTML == playerPiece && s8.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s3.innerHTML == playerPiece && s6.innerHTML == playerPiece && s9.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s4.innerHTML == playerPiece && s5.innerHTML == playerPiece && s6.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s7.innerHTML == playerPiece && s8.innerHTML == playerPiece && s9.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	if(s3.innerHTML == playerPiece && s5.innerHTML == playerPiece && s7.innerHTML == playerPiece) {
		playerWin();
		setTimeout(clearBoard,1500);
	}
	// Computer Victories
	if(s1.innerHTML == aiPiece && s2.innerHTML == aiPiece && s3.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s1.innerHTML == aiPiece && s4.innerHTML == aiPiece && s7.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s1.innerHTML == aiPiece && s5.innerHTML == aiPiece && s9.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s2.innerHTML == aiPiece && s5.innerHTML == aiPiece && s8.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s3.innerHTML == aiPiece && s6.innerHTML == aiPiece && s9.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s4.innerHTML == aiPiece && s5.innerHTML == aiPiece && s6.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s7.innerHTML == aiPiece && s8.innerHTML == aiPiece && s9.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	if(s3.innerHTML == aiPiece && s5.innerHTML == aiPiece && s7.innerHTML == aiPiece) {
		playerLose();
		setTimeout(clearBoard,1500);
	}
	return true;
}

function checkDraw() {
	if(board.length == 0 && checkWinner() !== 1) {
			document.querySelector('.text').innerHTML = "<span class='bold'>Draw!</span>";
			setTimeout(clearBoard,1500); 
	} 
	if(board.length == 0 && checkWinner()) { 
		checkWinner();
	} 
}

function playerWin() {
	document.querySelector('.text').innerHTML = "You <span class='bold'>Win!</span>";
}

function playerLose() {
	document.querySelector('.text').innerHTML = "You <span class='bold'>Lose!</span>";
}

function clearBoard() {
	s1.innerHTML = '';
	s2.innerHTML = '';
	s3.innerHTML = '';
	s4.innerHTML = '';
	s5.innerHTML = '';
	s6.innerHTML = '';
	s7.innerHTML = '';
	s8.innerHTML = '';
	s9.innerHTML = '';
	document.querySelector('.text').innerHTML = "Let's <span class='bold'>play!</span>";
	board = [s1,s2,s3,s4,s5,s6,s7,s8,s9];
	playerTurn = true;
}

function playerMove() {
	if(this.innerHTML != aiPiece && this.innerHTML != playerPiece && playerTurn) {
		board.splice(board.indexOf(this),1);
		this.innerHTML = playerPiece;
		playerTurn = false;
		checkWinner();
		checkDraw();
		setTimeout(aiTurn,2000);
	}	
}

function aiTurn() { 
	aiMove = _.shuffle(board);
	aiMove[0].innerHTML = aiPiece;
	board.splice(board.indexOf(aiMove[0]),1);
	checkWinner();
	checkDraw();
	playerTurn = true; 
}


/* TODOS
----------------------------------

 Add Block function
	if(s1.innerHTML == playerPiece && s2.innerHTML == playerPiece && s3.innerHTML == '') { 
		s3.innerHTML = aiPiece;
		board.splice(board.indexOf(s3),1);
		checkWinner();
		checkDraw();
	}
	
 Add Win functon
 
 ---------------------------------*/