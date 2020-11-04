import React from 'react';
import { useDrop } from 'react-dnd';
import { Cell } from './Cell';
import { canDropShip } from '../game/Game';
import { ShipTypes } from '../game/transforms';
import { Overlay } from './Overlay';

export const DropCell = ({ x, y, children, label, dropShip }) => {
	const [{ isOver, canDrop }, drop] = useDrop({
		accept: ShipTypes.PATROLBOAT.key,
		canDrop: () => canDropShip(x, y),
		drop: () => dropShip(x, y, ShipTypes.PATROLBOAT.key),
		collect: monitor => ({
			isOver: !!monitor.isOver(),
			canDrop: !!monitor.canDrop(),
		}),
	});

	return (
		<div
			ref={drop}
			style={{
				position: 'relative',
				width: '100%',
				height: '100%',
			}}
		>
			<Cell h>{children || label}</Cell>
			{isOver && !canDrop && <Overlay color='red' />}
			{/* {!isOver && canDrop && <Overlay color='yellow' />} */}
			{isOver && canDrop && <Overlay color='green' />}
		</div>
	);
};
