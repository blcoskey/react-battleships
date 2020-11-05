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
