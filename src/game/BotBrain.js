export const getNextShot = (shots = []) => {
	return getRandomBlock(shots);
};

const getRandomBlock = shots => {
	const validCells = generateGameBoardMatrix().filter(({ x, y }) => !shots.find(({ x: shotX, y: shotY }) => x === shotX && y === shotY) && x !== 0 && y !== 0);
	const nextShot = validCells[Math.floor(Math.random() * validCells.length)];

	return nextShot;
};

const generateGameBoardMatrix = () => {
	return Array.from(Array(100).keys()).map(i => {
		const x = Math.floor(i / 10);
		const y = i % 10;

		return { x, y };
	});
};
