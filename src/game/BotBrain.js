import { hasAdjacentShip } from './Game';
import { ShipSizes, ShipTypes } from './transforms';

export const getNextShot = (shots = []) => {
	return getRandomBlock(shots);
};

const getRandomBlock = shots => {
	const validCells = generateGameBoardMatrix().filter(({ x, y }) => !shots.find(({ x: shotX, y: shotY }) => x === shotX && y === shotY));
	const nextShot = validCells[Math.floor(Math.random() * validCells.length)];

	return nextShot;
};

const generateGameBoardMatrix = () => {
	return Array.from(Array(100).keys()).map(i => {
		const x = Math.floor(i / 10);
		const y = i % 10;

		return { x: x + 1, y: y + 1 };
	});
};

// Generate a big square from the starting point, will use later to see
// if the square overlaps anywhere
export const getShipZone = (x, y, shipSize, type, direction) => {
	let shipArray = [{ x, y, type }];

	// Get ship cells
	for (let i = 1; i < shipSize; i++) {
		if (direction === 'x') {
			const { x: prevX = x } = shipArray[i - 1];
			shipArray.push({ x: prevX + 1, y, type });
		} else {
			const { y: prevY = y } = shipArray[i - 1] || {};
			shipArray.push({ x, y: prevY + 1, type });
		}
	}

	return shipArray;
};

// Check to see if there is any overlap
const isShipZoneValid = (shipArray, ships) => {
	const shipOverlap = shipArray.find(a => ships.find(b => a.x === b.x && a.y === b.y));
	const adjacentOverlap = shipArray.find(({ x, y }) => hasAdjacentShip(x, y, ships));
	const outOfBounds = shipArray.find(({ x, y }) => x > 10 || x < 1 || y > 10 || y < 1);

	if (shipOverlap || adjacentOverlap || outOfBounds) return false;
	return true;
};

export const getShipPlacement = (shipSize, shipType, ships) => {
	let usedCells = [...ships];
	let cellIsValid = false;
	let direction = 'x';
	let randomCell;
	let shipArray = [];

	let testArray = [];

	while (!cellIsValid) {
		randomCell = getRandomBlock(usedCells);
		if (!randomCell) {
			return null;
		}
		const { x, y } = randomCell;

		// Check if there is enough space from that position
		if (x + (shipSize - 1) <= 10) {
			direction = 'x';
		} else if (y + (shipSize - 1) <= 10) {
			direction = 'y';
		} else {
			usedCells.push(randomCell);
			continue;
		}

		shipArray = getShipZone(x, y, shipSize, shipType, direction);
		testArray.push(shipArray);
		if (isShipZoneValid(shipArray, usedCells)) {
			cellIsValid = true;
		} else {
			// Add the invalid cell to array so that we don't try it again
			usedCells.push(randomCell);
		}
	}

	return shipArray;
};

export const getRandomFleetPlacement = () => {
	let ships = [];
	let failure = false;

	Object.keys(ShipSizes).forEach(x => {
		const newShip = getShipPlacement(ShipSizes[x], ShipTypes[x], ships);

		if (newShip === null) {
			failure = true;
		} else {
			ships = [...ships, ...newShip];
		}
	});

	// Recusrive hack for random instances of the random generator getting the placement wrong
	if (failure) {
		ships = getRandomFleetPlacement();
	}

	return ships;
};
