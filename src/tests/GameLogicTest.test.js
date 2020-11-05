const { getNextShot, getShipZone } = require('../game/BotBrain');
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
		const [ship, shipZone] = getShipZone(5, 4, ShipSizes[ShipTypes.CARRIER], ShipTypes.CARRIER, 'x');
		expect(ship).toEqual([
			{ x: 5, y: 4, type: ShipTypes.CARRIER },
			{ x: 6, y: 4, type: ShipTypes.CARRIER },
			{ x: 7, y: 4, type: ShipTypes.CARRIER },
			{ x: 8, y: 4, type: ShipTypes.CARRIER },
			{ x: 9, y: 4, type: ShipTypes.CARRIER },
		]);

		const expectedZone = [
			{ x: 4, y: 3, type: ShipTypes.CARRIER },
			{ x: 5, y: 3, type: ShipTypes.CARRIER },
			{ x: 6, y: 3, type: ShipTypes.CARRIER },
			{ x: 7, y: 3, type: ShipTypes.CARRIER },
			{ x: 8, y: 3, type: ShipTypes.CARRIER },
			{ x: 9, y: 3, type: ShipTypes.CARRIER },
			{ x: 10, y: 3, type: ShipTypes.CARRIER },
			{ x: 4, y: 4, type: ShipTypes.CARRIER },
			{ x: 10, y: 4, type: ShipTypes.CARRIER },
			{ x: 4, y: 5, type: ShipTypes.CARRIER },
			{ x: 5, y: 5, type: ShipTypes.CARRIER },
			{ x: 6, y: 5, type: ShipTypes.CARRIER },
			{ x: 7, y: 5, type: ShipTypes.CARRIER },
			{ x: 8, y: 5, type: ShipTypes.CARRIER },
			{ x: 9, y: 5, type: ShipTypes.CARRIER },
			{ x: 10, y: 5, type: ShipTypes.CARRIER },
		];

		expect(shipZone.sort(sortShips)).toEqual(expectedZone.sort(sortShips));
	});

	it('getShipZone() - horizontal', () => {
		const [ship, shipZone] = getShipZone(5, 4, ShipSizes[ShipTypes.CARRIER], ShipTypes.CARRIER, 'y');
		expect(ship).toEqual([
			{ x: 5, y: 4, type: ShipTypes.CARRIER },
			{ x: 5, y: 5, type: ShipTypes.CARRIER },
			{ x: 5, y: 6, type: ShipTypes.CARRIER },
			{ x: 5, y: 7, type: ShipTypes.CARRIER },
			{ x: 5, y: 8, type: ShipTypes.CARRIER },
		]);

		const expectedZone = [
			{ x: 4, y: 3, type: ShipTypes.CARRIER },
			{ x: 5, y: 3, type: ShipTypes.CARRIER },
			{ x: 6, y: 3, type: ShipTypes.CARRIER },
			{ x: 4, y: 9, type: ShipTypes.CARRIER },
			{ x: 5, y: 9, type: ShipTypes.CARRIER },
			{ x: 6, y: 9, type: ShipTypes.CARRIER },
			{ x: 4, y: 4, type: ShipTypes.CARRIER },
			{ x: 4, y: 5, type: ShipTypes.CARRIER },
			{ x: 4, y: 6, type: ShipTypes.CARRIER },
			{ x: 4, y: 7, type: ShipTypes.CARRIER },
			{ x: 4, y: 8, type: ShipTypes.CARRIER },
			{ x: 6, y: 4, type: ShipTypes.CARRIER },
			{ x: 6, y: 5, type: ShipTypes.CARRIER },
			{ x: 6, y: 6, type: ShipTypes.CARRIER },
			{ x: 6, y: 7, type: ShipTypes.CARRIER },
			{ x: 6, y: 8, type: ShipTypes.CARRIER },
		];

		expect(shipZone.sort(sortShips)).toEqual(expectedZone.sort(sortShips));
	});
});
