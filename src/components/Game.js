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

	const [game, setGame] = useReducer(reducer, { stage: GameStages.SETUP });
	const [ships, setShips] = useState([]);
	const [selectedShip, setSelectedShip] = useState(defaultSelectedShip);

	const moveShip = (moveX, moveY) => {
		let oldSelectedShip = [...selectedShip];
		let newSelectedShip = oldSelectedShip.reduce((acc, cur) => {
			const { type, x, y } = cur;
			return [...acc, { type, x: x + moveX, y: y + moveY }];
		}, []);
		setSelectedShip(newSelectedShip);
	};

	const rotateShip = () => {
		let oldSelectedShip = [...selectedShip];

		let newSelectedShip = oldSelectedShip.reduce((acc, cur) => {
			const { type, x, y } = cur;
			return [...acc, { type, x: y, y: x }];
		}, []);
		setSelectedShip(newSelectedShip);
	};

	const reset = () => {
		setSelectedShip(defaultSelectedShip);
		setShips([]);
	};

	const placeShip = () => {
		let newShips = [...ships];
		setShips([...newShips, ...selectedShip]);

		const nextShip = getNextShip();
		setSelectedShip(nextShip);
	};

	const getNextShip = () => {
		const nextShip = Object.values(ShipTypes).find(x => !ships.find(({ type }) => type === x) && !selectedShip.find(({ type }) => type === x));
		const nextShipSize = ShipSizes[nextShip];
		let ship = [];
		const x = 5;
		let y = 3;
		for (let i = 1; i < nextShipSize; i++) {
			ship.push({ type: nextShip, x, y: y++ });
		}

		return ship;
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
							<Cell>Place</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(-1, 0)}>
							<Cell>
								<UpArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={reset}>
							<Cell>Reset</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, -1)}>
							<Cell>
								<LeftArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={rotateShip}>
							<Cell>
								<RotateArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, 1)}>
							<Cell>
								<RightArrow />
							</Cell>
						</div>
						<div style={buttonStyle}></div>
						<div style={buttonStyle} onClick={() => moveShip(1, 0)}>
							<Cell>
								<DownArrow />
							</Cell>
						</div>
						<div style={buttonStyle}></div>
					</div>
				</div>
			</div>
		);
	}

	return <div>Yo!</div>;
};

export default Game;
