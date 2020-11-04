import React, { useReducer, useState } from 'react';
import { ShipTypes, ShipSizes, GameStages } from '../game/transforms';
import BattleGrid from './BattleGrid';
import Cell from './Cell';
import { ReactComponent as UpArrow } from '../icons/arrow-up.svg';
import { ReactComponent as DownArrow } from '../icons/arrow-down.svg';
import { ReactComponent as LeftArrow } from '../icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../icons/arrow-right.svg';
import { ReactComponent as RotateArrow } from '../icons/arrow-rotate.svg';

const Game = props => {
	const reducer = (prev, newState) => {
		return { ...prev, ...newState };
	};

	const defaultSelectedShip = [
		{ type: ShipTypes.CARRIER, x: 5, y: 3 },
		{ type: ShipTypes.CARRIER, x: 5, y: 4 },
		{ type: ShipTypes.CARRIER, x: 5, y: 5 },
		{ type: ShipTypes.CARRIER, x: 5, y: 6 },
		{ type: ShipTypes.CARRIER, x: 5, y: 7 },
	];

	const [game, setGame] = useState({ stage: GameStages.SETUP });
	const [ships, setShips] = useState([]);

	const [selectedShip, setSelectedShip] = useState(defaultSelectedShip);

	const reset = () => {
		setSelectedShip(defaultSelectedShip);
		setShips([]);
	};

	const getNextShip = (ships, selectedShip) => {
		const nextShip = Object.values(ShipTypes).find(x => !ships.find(({ type }) => type === x) && !selectedShip.find(({ type }) => type === x));
		if (!nextShip) {
			return;
		}
		const nextShipSize = ShipSizes[nextShip];
		const x = 5;
		let y = 3;
		let ship = [{ type: nextShip, x, y }];

		for (let i = 0; i < nextShipSize; i++) {
			ship.push({ type: nextShip, x, y: y++ });
		}

		return ship;
	};

	const moveShip = (moveX, moveY) => {
		if (!selectedShip) {
			return;
		}
		let oldSelectedShip = [...selectedShip];
		let newSelectedShip = oldSelectedShip.reduce((acc, cur) => {
			const { type, x, y } = cur;
			return [...acc, { type, x: x + moveX, y: y + moveY }];
		}, []);

		if (newSelectedShip.find(({ x, y }) => x > 10 || x < 1 || y > 10 || y < 1)) {
			return;
		}
		setSelectedShip(newSelectedShip);
	};

	const rotateShip = () => {
		if (!selectedShip) {
			return;
		}
		let oldSelectedShip = [...selectedShip];

		let newSelectedShip = oldSelectedShip.reduce((acc, cur) => {
			const { type, x, y } = cur;
			return [...acc, { type, x: y, y: x }];
		}, []);
		setSelectedShip(newSelectedShip);
	};

	const placeShip = () => {
		if (!selectedShip) {
			return;
		}
		let newShips = [...ships];
		setShips([...newShips, ...selectedShip]);

		const nextShip = getNextShip(ships, selectedShip);

		if (nextShip) {
			setSelectedShip(nextShip);
		} else {
			setSelectedShip();
		}
	};

	const startGame = () => {
		if (!selectedShip) {
			setGame({ stage: GameStages.STARTGAME });
		}
	};

	const { stage } = game;

	const buttonStyle = { width: '33%', height: '33%' };
	if (stage === GameStages.SETUP) {
		return (
			<div className='Container'>
				<div style={{ width: '500px', height: '500px' }}>
					<BattleGrid ships={ships} selectedShip={selectedShip} stage={stage} />
				</div>
				<div style={{ width: '135px', height: '135px' }}>
					<div className='Button-Container'>
						<div style={buttonStyle} onClick={placeShip}>
							<Cell disabled={!selectedShip}>Place</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(-1, 0)}>
							<Cell disabled={!selectedShip}>
								<UpArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={reset}>
							<Cell>Reset</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, -1)}>
							<Cell disabled={!selectedShip}>
								<LeftArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={rotateShip}>
							<Cell disabled={!selectedShip}>
								<RotateArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, 1)}>
							<Cell disabled={!selectedShip}>
								<RightArrow />
							</Cell>
						</div>
						<div style={buttonStyle}></div>
						<div style={buttonStyle} onClick={() => moveShip(1, 0)}>
							<Cell disabled={!selectedShip}>
								<DownArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={startGame}>
							<Cell disabled={!!selectedShip}>Start</Cell>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (stage === GameStages.STARTGAME) {
		return (
			<>
				<div className='Container2'>
					<div style={{ width: '500px', height: '500px' }}>
						<h3>Player</h3>
						<BattleGrid ships={ships} selectedShip={selectedShip} stage={stage} />
					</div>
					<div style={{ width: '500px', height: '500px' }}>
						<h3>Bot</h3>
						<BattleGrid ships={ships} selectedShip={selectedShip} stage={stage} />
					</div>
				</div>
				<div className='Container2'></div>
			</>
		);
	}

	return <div>Yo!</div>;
};

export default Game;
