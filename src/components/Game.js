/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useReducer, useState } from 'react';
import { ShipTypes, ShipSizes, GameStages, PlayerType } from '../game/transforms';
import BattleGrid from './BattleGrid';
import Cell from './Cell';
import { ReactComponent as UpArrow } from '../icons/arrow-up.svg';
import { ReactComponent as DownArrow } from '../icons/arrow-down.svg';
import { ReactComponent as LeftArrow } from '../icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../icons/arrow-right.svg';
import { ReactComponent as RotateArrow } from '../icons/arrow-rotate.svg';
import { getShip, hasAdjacentShip } from '../game/Game';
import { getNextShot } from '../game/BotBrain';

const Game = props => {
	const defaultSelectedShip = [
		{ type: ShipTypes.CARRIER, x: 5, y: 3 },
		{ type: ShipTypes.CARRIER, x: 5, y: 4 },
		{ type: ShipTypes.CARRIER, x: 5, y: 5 },
		{ type: ShipTypes.CARRIER, x: 5, y: 6 },
		{ type: ShipTypes.CARRIER, x: 5, y: 7 },
	];

	const [game, setGame] = useState(GameStages.SETUP);
	const [turn, setTurn] = useState(PlayerType.PLAYER);
	const [playerShips, setPlayerShips] = useState([]);
	const [playerShots, setPlayerShots] = useState([]);
	const [botShips, setBotShips] = useState([
		{
			type: 0,
			x: 5,
			y: 3,
		},
		{ type: 0, x: 5, y: 4 },
		{ type: 0, x: 5, y: 5 },
		{ type: 0, x: 5, y: 6 },
		{ type: 0, x: 5, y: 7 },
		{ type: 1, x: 1, y: 9 },
		{ type: 1, x: 2, y: 9 },
		{ type: 1, x: 3, y: 9 },
		{ type: 1, x: 4, y: 9 },
		{ type: 2, x: 7, y: 3 },
		{ type: 2, x: 7, y: 4 },
		{ type: 2, x: 7, y: 5 },
		{ type: 3, x: 7, y: 9 },
		{ type: 3, x: 8, y: 9 },
		{ type: 3, x: 9, y: 9 },
		{ type: 4, x: 3, y: 3 },
		{ type: 4, x: 3, y: 4 },
	]);
	const [botShots, setBotShots] = useState([]);
	const [selectedShip, setSelectedShip] = useState(defaultSelectedShip);

	const reset = () => {
		setSelectedShip(defaultSelectedShip);
		setPlayerShips([]);
		setGame(GameStages.SETUP);
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

		for (let i = 1; i < nextShipSize; i++) {
			y++;
			ship.push({ type: nextShip, x, y: y });
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
		// No ships left to place
		if (!selectedShip) {
			return;
		}
		// Check for adjacent ships or existing ships
		if (selectedShip.find(({ x, y }) => getShip(x, y, playerShips) || hasAdjacentShip(x, y, playerShips))) {
			return;
		}
		let newShips = [...playerShips];
		setPlayerShips([...newShips, ...selectedShip]);

		const nextShip = getNextShip(playerShips, selectedShip);

		if (nextShip) {
			setSelectedShip(nextShip);
		} else {
			setSelectedShip();
		}
	};

	const startGame = () => {
		if (!selectedShip) {
			setGame(GameStages.STARTGAME);
		}
	};

	const fireShot = (x, y, playerType, hit = null) => {
		// This pretty much only happens when the bot fires
		if (hit === null) {
			const ship = getShip(x, y, playerShips);
			hit = !!ship;
		}

		let shots = [...playerShots];
		if (playerType === PlayerType.BOT) {
			shots = [...botShots];
		}

		shots = [...shots, { x, y, hit }];

		if (playerType === PlayerType.BOT) {
			setBotShots(shots);
		} else {
			setPlayerShots(shots);
		}
	};

	useEffect(() => {
		if (game === GameStages.STARTGAME) {
			const { hit: lastShotHit } = playerShots[playerShots.length - 1] || [];
			if (!lastShotHit) {
				setTurn(PlayerType.BOT);
			}
		}
	}, [playerShots]);

	const sunkAllShips = shots => {
		return shots.filter(({ hit }) => hit === true).length >= 17;
	};

	const botShot = () => {
		if (sunkAllShips(botShots)) {
			setGame(GameStages.GAMEOVER);
		} else {
			const { x, y } = getNextShot(botShots) || {};
			fireShot(x, y, PlayerType.BOT);
		}
	};

	useEffect(() => {
		if (game === GameStages.STARTGAME) {
			const { hit: lastShotHit } = botShots[botShots.length - 1] || [];
			if (!lastShotHit) {
				setTurn(PlayerType.PLAYER);
			} else {
				botShot();
			}
		}
	}, [botShots]);

	useEffect(() => {
		if (turn === PlayerType.BOT && game === GameStages.STARTGAME) {
			botShot();
		}
	}, [turn]);

	const buttonStyle = { width: '33%', height: '33%' };
	if (game === GameStages.SETUP) {
		return (
			<div className='Container'>
				<div style={{ width: '500px', height: '500px' }}>
					<BattleGrid ships={playerShips} selectedShip={selectedShip} stage={game} />
				</div>
				<div style={{ width: '135px', height: '135px' }}>
					<div className='Button-Container'>
						<div style={buttonStyle} onClick={placeShip}>
							<Cell pointer disabled={!selectedShip}>
								Place
							</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(-1, 0)}>
							<Cell pointer disabled={!selectedShip}>
								<UpArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={reset}>
							<Cell pointer>Reset</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, -1)}>
							<Cell pointer disabled={!selectedShip}>
								<LeftArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={rotateShip}>
							<Cell pointer disabled={!selectedShip}>
								<RotateArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={() => moveShip(0, 1)}>
							<Cell pointer disabled={!selectedShip}>
								<RightArrow />
							</Cell>
						</div>
						<div style={buttonStyle}></div>
						<div style={buttonStyle} onClick={() => moveShip(1, 0)}>
							<Cell pointer disabled={!selectedShip}>
								<DownArrow />
							</Cell>
						</div>
						<div style={buttonStyle} onClick={startGame}>
							<Cell pointer disabled={!!selectedShip}>
								Start
							</Cell>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (game === GameStages.STARTGAME || game === GameStages.GAMEOVER) {
		return (
			<>
				<div className='Container2'>
					<div style={{ width: '500px', height: '500px' }}>
						<h3>Player</h3>
						<BattleGrid shots={botShots} ships={playerShips} selectedShip={selectedShip} stage={game} playerType={PlayerType.PLAYER} />
					</div>
					<div style={{ width: '500px', height: '500px' }}>
						<h3>Bot</h3>
						<BattleGrid shots={playerShots} ships={botShips} selectedShip={[]} stage={game} playerType={PlayerType.BOT} fireShot={fireShot} />
					</div>
				</div>
			</>
		);
	}

	return <div>Yo!</div>;
};

export default Game;
