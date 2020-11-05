export const getLabel = (x, y) => {
	const labels = [['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['10']];

	const row = labels[x] || [];
	const cell = row[y] || '';
	return cell;
};

export const hasAdjacentShip = (x, y, ships) => {
	return ships.find(
		({ x: shipX, y: shipY }) =>
			(Math.abs(shipX - x) === 1 && Math.abs(shipY - y) === 1) ||
			(Math.abs(shipX - x) === 0 && Math.abs(shipY - y) === 1) ||
			(Math.abs(shipX - x) === 1 && Math.abs(shipY - y) === 0)
	);
};

export const getShip = (cellX, cellY, ships) => {
	return ships.find(({ x, y }) => x === cellX && cellY === y);
};
