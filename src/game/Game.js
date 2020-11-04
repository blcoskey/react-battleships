export const getLabel = (x, y) => {
	const labels = [['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['10']];

	const row = labels[x] || [];
	const cell = row[y] || '';
	return cell;
};

export const canDropShip = (x, y) => {
	return true;
};
export const dropShip = (x, y) => {};
