import React from 'react';
import { Cell } from './Cell';
import { getLabel, hasAdjacentShip, getShip, getShot } from '../game/Game';
import { ShipTypes, ShipSizes, GameStages, PlayerType } from '../game/transforms';

const boardStyle = {
	width: '100%',
	height: '100%',
	display: 'flex',
	flexWrap: 'wrap',
};

let squareStyle = { width: '9%', height: '9%' };
const BattleGrid = ({ ships, shots = [], selectedShip = [], stage, playerType, fireShot }) => {
	const renderCell = i => {
		const x = Math.floor(i / 11);
		const y = i % 11;
		const hasShip = getShip(x, y, ships);
		const shot = getShot(x, y, shots);
		const placingShip = getShip(x, y, selectedShip);
		const shipAdjacent = hasAdjacentShip(x, y, ships);
		const label = getLabel(x, y);
		let pointer = false;

		const fire = () => {
			if (hasShip) {
				fireShot(x, y, PlayerType.PLAYER, true);
			} else {
				fireShot(x, y, PlayerType.PLAYER, false);
			}
		};

		const onClick = !shot && !label && x !== 0 && y !== 0 && stage === GameStages.STARTGAME && playerType === PlayerType.BOT ? fire : null;
		if (onClick !== null) {
			pointer = true;
		}

		const { hit } = shot || {};
		return (
			<div key={i} style={squareStyle} onClick={onClick}>
				<Cell
					hit={hit === true}
					miss={hit === false}
					pointer={pointer}
					hasShip={hasShip}
					playerType={playerType}
					placingShip={placingShip}
					shipAdjacent={shipAdjacent}
					stage={stage}
				>
					{label}
				</Cell>
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
