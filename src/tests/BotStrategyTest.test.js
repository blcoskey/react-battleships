const { getNextShot, getShipZone, getShipPlacement, getRandomFleetPlacement } = require('../game/BotBrain');
const { getShipStatus } = require('../game/BotStrategy');
const { getShip, sortShips } = require('../game/Game');
const { ShipTypes, ShipSizes, ShipStatus } = require('../game/transforms');
const { shipSample1, shipSample2 } = require('./TestData');

describe('BotStrategy', () => {
	it('getShipStatus() - has carrier sunk - Top Left Horizontal', () => {
		const shots = [
			{ x: 0, y: 0, hit: true },
			{ x: 0, y: 1, hit: true },
			{ x: 0, y: 2, hit: true },
			{ x: 0, y: 3, hit: true },
			{ x: 0, y: 4, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - has carrier sunk - Top Right Horizontal', () => {
		const shots = [
			{ x: 0, y: 6, hit: true },
			{ x: 0, y: 7, hit: true },
			{ x: 0, y: 8, hit: true },
			{ x: 0, y: 9, hit: true },
			{ x: 0, y: 10, hit: true },
		];

		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - has carrier sunk - Top Right Vertical', () => {
		const shots = [
			{ x: 0, y: 10, hit: true },
			{ x: 1, y: 10, hit: true },
			{ x: 2, y: 10, hit: true },
			{ x: 3, y: 10, hit: true },
			{ x: 4, y: 10, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - has carrier sunk - Top Left Vertical', () => {
		const shots = [
			{ x: 0, y: 0, hit: true },
			{ x: 1, y: 0, hit: true },
			{ x: 2, y: 0, hit: true },
			{ x: 3, y: 0, hit: true },
			{ x: 4, y: 0, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - Random ship placement - all sunk', () => {
		const fleet = getRandomFleetPlacement();
		const shots = fleet.map(({ x, y }) => {
			return { x, y, hit: true };
		});

		Object.values(ShipTypes).forEach(shipType => {
			const shipStatus = getShipStatus(shots);
			if (shipStatus[shipType] !== ShipStatus.SUNK) {
				console.log(fleet);
			}
			expect(shipStatus[shipType]).toBe(ShipStatus.SUNK);
		});
	});

	it('getShipStatus() - Patrol boat on edghe status unkown without enough data', () => {
		const shots = [
			{ x: 0, y: 0, hit: true },
			{ x: 1, y: 0, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.UNKNOWN);
	});

	it('getShipStatus() - Patrol boat in the middlewithout unkown without enough data', () => {
		const shots = [
			{ x: 5, y: 5, hit: true },
			{ x: 5, y: 6, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.UNKNOWN);
	});

	it('getShipStatus() - Patrol boat status sunk with two hits and misses on both sides and no other ships have been sunk', () => {
		const shots = [
			{ x: 0, y: 0, hit: false },
			{ x: 1, y: 0, hit: true },
			{ x: 2, y: 0, hit: true },
			{ x: 3, y: 0, hit: false },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - ship on the edge', () => {
		const shots = [
			{ x: 0, y: 0, hit: true },
			{ x: 1, y: 0, hit: true },
			{ x: 2, y: 0, hit: false },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - A ship between two ships', () => {
		const shots = [
			{ x: 0, y: 0, hit: true },
			{ x: 1, y: 0, hit: true },
			{ x: 2, y: 0, hit: true },
			{ x: 3, y: 0, hit: true },
			{ x: 4, y: 0, hit: true },
			{ x: 0, y: 2, hit: true },
			{ x: 0, y: 3, hit: true },
			{ x: 2, y: 5, hit: true },
			{ x: 3, y: 5, hit: true },
			{ x: 4, y: 5, hit: true },
			{ x: 5, y: 5, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.BATTLESHIP]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.SUNK);
	});

	it('getShipStatus() - Specific ship placement', () => {
		const shots = [
			{ x: 4, y: 4, hit: true },
			{ x: 5, y: 4, hit: true },
			{ x: 6, y: 4, hit: true },
			{ x: 7, y: 4, hit: true },
			{ x: 8, y: 4, hit: true },
			{ x: 2, y: 1, hit: true },
			{ x: 3, y: 1, hit: true },
			{ x: 4, y: 1, hit: true },
			{ x: 5, y: 1, hit: true },
			{ x: 10, y: 4, hit: true },
			{ x: 10, y: 5, hit: true },
			{ x: 10, y: 6, hit: true },
			{ x: 5, y: 7, hit: true },
			{ x: 6, y: 7, hit: true },
			{ x: 7, y: 7, hit: true },
			{ x: 2, y: 6, hit: true },
			{ x: 3, y: 6, hit: true },
		];
		const shipStatus = getShipStatus(shots);
		expect(shipStatus[ShipTypes.CARRIER]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.BATTLESHIP]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.SUBMARINE]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.DESTROYER]).toBe(ShipStatus.SUNK);
		expect(shipStatus[ShipTypes.PATROLBOAT]).toBe(ShipStatus.SUNK);
	});
});
