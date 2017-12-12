'use strict';

var board = document.querySelector('.js-board');

var occupiedSquares = [];

function isOccupied(square) {
	return square.getAttribute('data-is-occupied') == 'true';
}

function checkForWin() {
	var winningRows = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[1,5,9],
		[3,5,7]
	];
	console.log(occupiedSquares);
	winningRows.forEach(function(row) {
		console.log(winningRows.indexOf(occupiedSquares) > -1);
		// if (row === occupiedSquares) {
		// 	console.log(row);
		// 	console.log(occupiedSquares);
		// 	alert('Winner!');
		// }
	});
}

function setOccupied(square, isComputer) {
	if (!isOccupied(square)) {
		var squareNumber = parseInt(square.getAttribute('data-square'), 10);
		var classToAdd = isComputer ? 'cross' : 'nought';
		square.classList.add(classToAdd);
		square.setAttribute('data-is-occupied', true);
		occupiedSquares.push(squareNumber);
		occupiedSquares = occupiedSquares.sort();
		checkForWin();
	} else {
		alert('That square is already taken');
	}
}

function init() {
	var squares = document.querySelectorAll('.js-square');
	squares.forEach(function(square) {
		square.addEventListener('click', function(e) {
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			setOccupied(square);
		});
	});
}
if (board) init();
