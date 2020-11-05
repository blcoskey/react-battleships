import React from 'react';
import { Cell } from './Cell';
import { getLabel, hasAdjacentShip, getShip } from '../game/Game';

const boardStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexWrap: 'wrap',
};

const squareStyle = { width: '9%', height: '9%' };
const BattleGrid = ({ ships, selectedShip = [], stage }) => {
	const renderCell = i => {
		const x = Math.floor(i / 11);
		const y = i % 11;
		const hasShip = getShip(x, y, ships);
		const placingShip = getShip(x, y, selectedShip);
		const shipAdjacent = hasAdjacentShip(x, y, ships);

		return (
			<div key={i} style={squareStyle}>
				<Cell label={getLabel(x, y)} hasShip={hasShip} placingShip={placingShip} shipAdjacent={shipAdjacent} stage={stage} />
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
