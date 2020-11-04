import React from 'react';
import { Cell } from './Cell';
import { getLabel } from '../game/Game';

const boardStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexWrap: 'wrap',
};

const squareStyle = { width: '9%', height: '9%' };
const BattleGrid = ({ ships, selectedShip, stage }) => {
	const getShip = (cellX, cellY, shipArray) => {
		return shipArray.find(({ x, y }) => x === cellX && cellY === y);
	};

	const renderCell = i => {
		const x = Math.floor(i / 11);
		const y = i % 11;
		const hasShip = getShip(x, y, ships);
		const placingShip = getShip(x, y, selectedShip);

		return (
			<div key={i} style={squareStyle}>
				<Cell label={getLabel(x, y)} hasShip={hasShip} placingShip={placingShip} stage={stage} />
			</div>
		);
	};

	const squares = [];
	for (let i = 0; i < 121; i += 1) {
		squares.push(renderCell(i));
	}

	return <div style={boardStyle}>{squares}</div>;
};

export default BattleGrid;
