'use strict';

var board = document.querySelector('.js-board');
var winnerMsg = document.querySelector('.js-winner');
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
	winningRows.forEach(function(row) {
		if (row.join('-') === occupiedSquares.join('-')) {
			winnerMsg.style.display = 'block';
		}
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
	winnerMsg.style.display = 'none';
	squares.forEach(function(square) {
		square.addEventListener('click', function(e) {
			e.preventDefault ? e.preventDefault() : (e.returnValue = false);
			setOccupied(square);
		});
	});
}
if (board) init();
