var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
var layOut = [];

var n = 0;

do {
	var randomId = Math.floor(Math.random() * (grid.length)); // picking up a random index
	var r = grid[randomId]; // setting a value for our new distribution

	if (r != -1) { // 	controlling if each element has been assigned a value
		layOut.push(r); // new array distribution to display
		grid[randomId] = -1;
		n += 1;
	}

} while (n < 16);



function drawPuzzle() { // setting values and id to our elements
	for (var i = 0; i < 16; i++) {
		document.getElementsByTagName('td')[i].innerHTML = '<button ><img src="./img/' + layOut[i] + '.png"></button>';
		document.getElementsByTagName('button')[i].setAttribute("id", i);


	}
	checkWin(); // in case the new distribution is a winner sort.
}

function moveDown() {
	if (layOut.indexOf(0) >= 4) { // all possible cases to make the move down
		var i = layOut.indexOf(0);
		var j = i - 4;
		var t = layOut[i];
		layOut[i] = layOut[j];
		layOut[j] = t;
		drawPuzzle();
	}
}

function moveUp() {
	if (layOut.indexOf(0) < 12) { // all possible cases to make de move up
		var i = layOut.indexOf(0);
		var j = i + 4; // new index
		var t = layOut[i];
		layOut[i] = layOut[j];
		layOut[j] = t; // value in new location
		drawPuzzle();
	}
}

function moveRight() {
	var i = layOut.indexOf(0);
	if (!(i == 0 || i == 4 || i == 8 || i == 12)) { // all possible cases to make de move right
		var j = i - 1;
		var t = layOut[i];
		layOut[i] = layOut[j];
		layOut[j] = t;
		drawPuzzle();
	}
}

function moveLeft() {
	var i = layOut.indexOf(0);
	if (!(i == 3 || i == 7 || i == 11 || i == 15)) { // all possible cases to make the move left
		var j = i + 1;
		var t = layOut[i];
		layOut[i] = layOut[j];
		layOut[j] = t;
		drawPuzzle();
	}
}

function clicked(e) { // to play with the mouse
	const clickid = parseInt(e.path[1].id) // clickid represents the button id obtained from the event listener
	i = layOut.indexOf(0); // blank element location.

	if (i === 0) { // analizing each case where the blank element is located
		if (clickid === 4) {
			moveUp();
			i = 4;
		}
		if (clickid === 1) {
			moveLeft();
			i = 1;
		}
	}
	if (i === 1) {
		if (clickid === 0) {
			moveRight();
			i = 0;
		}
		if (clickid === 5) {
			moveUp();
			i = 5;
		}
		if (clickid === 2) {
			moveLeft();
			i = 2;
		}
	}
	if (i === 2) {
		if (clickid === 1) {
			moveRight();
			i = 1;
		}
		if (clickid === 6) {
			moveUp();
			i = 6;
		}
		if (clickid === 3) {
			moveLeft();
			i = 3;
		}
	}
	if (i === 3) {
		if (clickid === 2) {
			moveRight();
			i = 2;
		}
		if (clickid === 7) {
			moveUp();
			i = 7;
		}
	}
	if (i === 4) {
		if (clickid === 0) {
			moveDown();
			i = 0;
		}
		if (clickid === 8) {
			moveUp();
			i = 8;
		}
		if (clickid === 5) {
			moveLeft();
			i = 5;
		}
	}
	if (i === 5) {
		if (clickid === 4) {
			moveRight();
			i = 4;
		}
		if (clickid === 1) {
			moveDown();
			i = 1;
		}
		if (clickid === 9) {
			moveUp();
			i = 9;
		}
		if (clickid === 6) {
			moveLeft();
			i = 6;
		}
	}
	if (i === 6) {
		if (clickid === 5) {
			moveRight();
			i = 5;
		}
		if (clickid === 2) {
			moveDown();
			i = 2;
		}
		if (clickid === 10) {
			moveUp();
			i = 10;
		}
		if (clickid === 7) {
			moveLeft();
			i = 7;
		}
	}
	if (i === 7) {
		if (clickid === 6) {
			moveRight();
			i = 6;
		}
		if (clickid === 3) {
			moveDown();
			i = 3;
		}
		if (clickid === 11) {
			moveUp();
			i = 11;
		}
	}
	if (i === 8) {
		if (clickid === 4) {
			moveDown();
			i = 4;
		}
		if (clickid === 12) {
			moveUp();
			i = 12;
		}
		if (clickid === 9) {
			moveLeft();
			i = 9;
		}
	}
	if (i === 9) {
		if (clickid === 8) {
			moveRight();
			i = 8;
		}
		if (clickid === 5) {
			moveDown();
			i = 5;
		}
		if (clickid === 13) {
			moveUp();
			i = 13;
		}
		if (clickid === 10) {
			moveLeft();
			i = 10;
		}
	}
	if (i === 10) {
		if (clickid === 9) {
			moveRight();
			i = 9;
		}
		if (clickid === 6) {
			moveDown();
			i = 6;
		}
		if (clickid === 14) {
			moveUp();
			i = 14;
		}
		if (clickid === 11) {
			moveLeft();
			i = 11;
		}
	}
	if (i === 11) {
		if (clickid === 10) {
			moveRight();
			i = 10;
		}
		if (clickid === 7) {
			moveDown();
			i = 7;
		}
		if (clickid === 15) {
			moveUp();
			i = 15;
		}
	}
	if (i === 12) {
		if (clickid === 8) {
			moveDown();
			i = 8;
		}
		if (clickid === 13) {
			moveLeft();
			i = 13;
		}
	}
	if (i === 13) {
		if (clickid === 12) {
			moveRight();
			i = 12;
		}
		if (clickid === 9) {
			moveDown();
			i = 9;
		}
		if (clickid === 14) {
			moveLeft();
			i = 14;
		}
	}
	if (i === 14) {
		if (clickid === 13) {
			moveRight();
			i = 13;
		}
		if (clickid === 10) {
			moveDown();
			i = 10;
		}
		if (clickid === 15) {
			moveLeft();
			i = 15;
		}
	}
	if (i === 15) {
		if (clickid === 14) {
			moveRight();
			i = 14;
		}
		if (clickid === 11) {
			moveDown();
			i = 11;
		}
	}
}

function keyPressed(e) { // to command with keys
	var k = e.keyCode; // k represents key code from the event listener
	if (k == 38) {
		moveUp();
	}
	if (k == 40) {
		moveDown();
	}
	if (k == 37) {
		moveLeft();
	}
	if (k == 39) {
		moveRight();
	}
}

function checkWin() { // checking if distribution is in order and displaying an alert in case of success
	var a = 1;
	for (i = 0; i < 14; i++) {
		if (layOut[i] != i + 1) {
			a = 0;
		}
	}
	if (a == 1) {
		alert('Congrats ! You Won !');
	}
}



drawPuzzle(); // renderizing the puzzle