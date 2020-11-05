import React from 'react';
import { PlayerType } from '../game/transforms';

const squareStyle = {
	width: '100%',
	height: '100%',
};

export const Cell = ({ hasShip, shipAdjacent, pointer, placingShip, hit, miss, children, disabled, playerType }) => {
	let backgroundColor = '#ffffff';

	if (!hasShip && !hit && !miss) {
		backgroundColor = '#ffffff';
	}
	if (hasShip && playerType !== PlayerType.BOT) backgroundColor = '#333';
	if (miss) backgroundColor = '#fff6b5';
	if (hit) backgroundColor = '#ffb5b5';
	if (placingShip) backgroundColor = '#39393a';
	if (disabled || (shipAdjacent && placingShip)) {
		backgroundColor = '#e8e8e8';
	}
	if (placingShip && hasShip) backgroundColor = '#ffb5b5';

	return (
		<div
			style={{
				...squareStyle,
				color: '#000',
				backgroundColor,
				border: '1px solid gray',
				cursor: pointer ? 'pointer' : 'auto',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{children}
		</div>
	);
};

export default React.memo(Cell);
