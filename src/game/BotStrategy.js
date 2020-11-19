import { getShipZone } from './BotBrain';
import { hasAdjacentShip, sortShips } from './Game';
import { ShipSizes, ShipStatus, ShipTypes } from './transforms';

export const getShipStatus = shots => {
	let shipStatuses = Object.values(ShipTypes).reduce((acc, cur) => {
		return { ...acc, [cur]: ShipStatus.UNKNOWN };
	}, []);

	const hits = shots.filter(({ hit }) => !!hit);
	const misses = shots.filter(({ hit }) => !hit);

	if (hits.length === 0) return shipStatuses;

	Object.values(ShipTypes).forEach(shipType => {
		const shipSize = ShipSizes[shipType];
		let shipArray = [];
		let isHorizontal = false;

		hits.some(({ x: hitX, y: hitY }) => {
			const expectedShipArrayX = getShipZone(hitX, hitY, shipSize, shipType, 'x').map(({ x, y }) => {
				return { x, y, hit: true };
			});
			const expectedShipArrayY = getShipZone(hitX, hitY, shipSize, shipType, 'y').map(({ x, y }) => {
				return { x, y, hit: true };
			});

			if (expectedShipArrayX.every(x => hits.map(y => JSON.stringify(y)).includes(JSON.stringify(x)))) {
				shipArray = expectedShipArrayX;
				isHorizontal = false;
			} else if (expectedShipArrayY.every(x => hits.map(y => JSON.stringify(y)).includes(JSON.stringify(x)))) {
				shipArray = expectedShipArrayY;
				isHorizontal = true;
			} else {
				return false;
			}

			if (shipStatuses[shipType - 1] === ShipStatus.UNKNOWN) {
				const sortedHits = shipArray.sort(sortShips);
				const startHit = sortedHits[0];
				const endHit = sortedHits[sortedHits.length - 1];

				const shipStart = isHorizontal ? { y: startHit.y - 1, x: startHit.x } : { x: startHit.x - 1, y: startHit.y };
				const shipEnd = isHorizontal ? { y: endHit.y + 1, x: endHit.x } : { x: endHit.x + 1, y: endHit.y };

				const adjacentMisses = misses.filter(({ x, y }) => (x === shipStart.x && y === shipStart.y) || (x === shipEnd.x && y === shipEnd.y)) || [];

				if (adjacentMisses.length === 0) {
					const { length: startLength } = hasAdjacentShip(shipStart.x, shipStart.x, hits) || [];
					const { length: endLength } = hasAdjacentShip(shipEnd.x, shipEnd.x, hits) || [];

					if (startLength === 2 && endLength === 2) {
						shipStatuses[shipType] = ShipStatus.SUNK;
						return true;
					}
				}
				if (adjacentMisses.length === 1) {
					if (
						shipStart.x === 0 ||
						shipStart.x === 10 ||
						shipStart.y === 0 ||
						shipStart.y === 10 ||
						shipEnd.x === 0 ||
						shipEnd.x === 10 ||
						shipEnd.y === 0 ||
						shipEnd.y === 10
					) {
						shipStatuses[shipType] = ShipStatus.SUNK;
						return true;
					}
				}
				if (adjacentMisses.length === 2) {
					shipStatuses[shipType] = ShipStatus.SUNK;
					return true;
				}
			} else {
				shipStatuses[shipType] = ShipStatus.SUNK;
				return true;
			}

			return false;
		});
	});

	return shipStatuses;
};

export const getTarget = shots => {};
