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
	let shipZoneArray = [];
	let shipArray = [{ x, y, type }];

	// get start and end of adjacent blocks
	if (direction === 'x') {
		const adjacentStart = { x: x - 1, y, type };
		const startCorner1 = { x: x - 1, y: y + 1, type };
		const startCorner2 = { x: x - 1, y: y - 1, type };

		// These two get skipped in the loop, so we add them manually
		shipZoneArray.push({ x, y: y + 1, type });
		shipZoneArray.push({ x, y: y - 1, type });

		const adjacentEnd = { x: x + shipSize, y, type };
		const endCorner1 = { x: x + shipSize, y: y + 1, type };
		const endCorner2 = { x: x + shipSize, y: y - 1, type };

		shipZoneArray.push(adjacentStart);
		shipZoneArray.push(adjacentEnd);
		shipZoneArray.push(startCorner1);
		shipZoneArray.push(startCorner2);
		shipZoneArray.push(endCorner1);
		shipZoneArray.push(endCorner2);
	} else {
		const adjacentStart = { y: y - 1, x, type };
		const startCorner1 = { y: y - 1, x: x + 1, type };
		const startCorner2 = { y: y - 1, x: x - 1, type };

		// These two get skipped in the loop, so we add them manually
		shipZoneArray.push({ y, x: x + 1, type });
		shipZoneArray.push({ y, x: x - 1, type });

		const adjacentEnd = { y: y + shipSize, x, type };
		const endCorner1 = { y: y + shipSize, x: x + 1, type };
		const endCorner2 = { y: y + shipSize, x: x - 1, type };

		shipZoneArray.push(adjacentStart);
		shipZoneArray.push(adjacentEnd);
		shipZoneArray.push(startCorner1);
		shipZoneArray.push(startCorner2);
		shipZoneArray.push(endCorner1);
		shipZoneArray.push(endCorner2);
	}

	// Get ship cells
	for (let i = 1; i < shipSize; i++) {
		if (direction === 'x') {
			const { x: prevX = x } = shipArray[i - 1];
			shipArray.push({ x: prevX + 1, y, type });
			shipZoneArray.push({ x: prevX + 1, y: y + 1, type });
			shipZoneArray.push({ x: prevX + 1, y: y - 1, type });
		} else {
			const { y: prevY = y } = shipArray[i - 1] || {};
			shipArray.push({ x: x, y: prevY + 1, type });
			shipZoneArray.push({ y: prevY + 1, x: x + 1, type });
			shipZoneArray.push({ y: prevY + 1, x: x - 1, type });
		}
	}

	return [shipArray, shipZoneArray];
};

const getPlacementArray = (x, y, shipSize, direction, increment) => {
	let shipPlacement = [];

	for (let i = 0; i < shipSize; i++) {
		const { x: prevX = x, y: prevY = y } = shipPlacement[i - 1] || {};
		if (direction === 'x') {
			shipPlacement.push({ y: prevY, x: prevX + increment });
		} else {
			shipPlacement.push({ x: prevX, y: prevY + increment });
		}
	}
};

export const getShipPlacement = (shipSize, ships) => {
	let cellIsValid = false;
	let direction = 'x';
	let increment = +1;
	let randomCell;

	while (!cellIsValid) {
		randomCell = getRandomBlock(ships);
		const { x, y } = randomCell;

		if (x + shipSize <= 10) {
			direction = 'x';
			increment = 1;
			cellIsValid = true;
		} else if (y + shipSize <= 10) {
			direction = 'y';
			increment = 1;
			cellIsValid = true;
		} else if (x - shipSize >= 1) {
			direction = 'x';
			increment = -1;
			cellIsValid = true;
		} else if (y - shipSize >= 1) {
			direction = 'y';
			increment = -1;
			cellIsValid = true;
		}
	}

	return getPlacementArray(randomCell.x, randomCell.y, shipSize, direction, increment);
};
