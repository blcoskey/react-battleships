const { getNextShot, getShipZone, getShipPlacement, getRandomFleetPlacement } = require('../game/BotBrain');
const { getShip, sortShips } = require('../game/Game');
const { ShipTypes, ShipSizes } = require('../game/transforms');
const { shipSample1, shipSample2 } = require('./TestData');

describe('GameLogic', () => {
	let playerShips = shipSample1;
	let playerShots = [];

	it('getShip()', () => {
		const knownShip = playerShips[0];
		const ship = getShip(knownShip.x, knownShip.y, playerShips);
		expect(ship).toBe(knownShip);
	});

	it('getNextShot()', () => {
		let botShots = [];

		for (let i = 0; i < 100; i++) {
			const shot = getNextShot(botShots);

			// Check for duplicate
			const duplicate = botShots.find(x => x === shot);

			expect(duplicate).toBeUndefined();
			botShots.push(shot);
		}

		// Check for invalid
		const invalidCell = botShots.find(({ x, y }) => x < 0 || x > 10 || y < 0 || y > 10);
		expect(invalidCell).toBeUndefined();
	});

	it('getShipZone() - vertical', () => {
		const ship = getShipZone(5, 4, ShipSizes[ShipTypes.CARRIER], ShipTypes.CARRIER, 'x');
		expect(ship).toEqual([
			{ x: 5, y: 4, type: ShipTypes.CARRIER },
			{ x: 6, y: 4, type: ShipTypes.CARRIER },
			{ x: 7, y: 4, type: ShipTypes.CARRIER },
			{ x: 8, y: 4, type: ShipTypes.CARRIER },
			{ x: 9, y: 4, type: ShipTypes.CARRIER },
		]);
	});

	it('getShipZone() - horizontal', () => {
		const carrier = getShipZone(5, 4, ShipSizes[ShipTypes.CARRIER], ShipTypes.CARRIER, 'y');
		expect(carrier).toEqual([
			{ x: 5, y: 4, type: ShipTypes.CARRIER },
			{ x: 5, y: 5, type: ShipTypes.CARRIER },
			{ x: 5, y: 6, type: ShipTypes.CARRIER },
			{ x: 5, y: 7, type: ShipTypes.CARRIER },
			{ x: 5, y: 8, type: ShipTypes.CARRIER },
		]);

		const battleship = getShipZone(5, 4, ShipSizes[ShipTypes.BATTLESHIP], ShipTypes.BATTLESHIP, 'y');
		expect(battleship).toEqual([
			{ x: 5, y: 4, type: ShipTypes.BATTLESHIP },
			{ x: 5, y: 5, type: ShipTypes.BATTLESHIP },
			{ x: 5, y: 6, type: ShipTypes.BATTLESHIP },
			{ x: 5, y: 7, type: ShipTypes.BATTLESHIP },
		]);

		const destroyer = getShipZone(5, 4, ShipSizes[ShipTypes.DESTROYER], ShipTypes.DESTROYER, 'y');
		expect(destroyer).toEqual([
			{ x: 5, y: 4, type: ShipTypes.DESTROYER },
			{ x: 5, y: 5, type: ShipTypes.DESTROYER },
			{ x: 5, y: 6, type: ShipTypes.DESTROYER },
		]);
	});

	it('getShipPlacement() - basic check', () => {
		let ships = [
			{ x: 6, y: 3, type: 0 },
			{ x: 7, y: 3, type: 0 },
			{ x: 8, y: 3, type: 0 },
			{ x: 9, y: 3, type: 0 },
			{ x: 10, y: 3, type: 0 },
			{ x: 5, y: 6, type: 1 },
			{ x: 6, y: 6, type: 1 },
			{ x: 7, y: 6, type: 1 },
			{ x: 8, y: 6, type: 1 },
			{ x: 9, y: 8, type: 2 },
			{ x: 9, y: 9, type: 2 },
			{ x: 9, y: 10, type: 2 },
			{ x: 2, y: 1, type: 3 },
			{ x: 3, y: 1, type: 3 },
			{ x: 4, y: 1, type: 3 },
		];

		const patrolBoat = getShipPlacement(ShipSizes[ShipTypes.PATROLBOAT], ShipTypes.PATROLBOAT, ships);
		ships = [...ships, ...patrolBoat];
	});

	it('getRandomFleetPlacement()', () => {
		for (let x = 0; x < 100; x++) {
			getRandomFleetPlacement();
		}
	});
});
