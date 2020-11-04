import React from 'react';

const squareStyle = {
	width: '100%',
	height: '100%',
};

export const Cell = ({ label, hasShip, placingShip, hit, miss, button = false, children }) => {
	let backgroundColor = '#fff';
	let pointer = button;

	if (!label) {
		if (!hasShip && !hit && !miss) {
			backgroundColor = '#fff';
			pointer = true;
		}
		if (miss) backgroundColor = '#fff6b5';
		if (hit) backgroundColor = '#ffb5b5';
		if (hasShip) backgroundColor = '#333';
		if (placingShip) backgroundColor = '#39393a';
		if (placingShip && hasShip) backgroundColor = '#ffb5b5';
	}

	return (
		<div
			style={{
				...squareStyle,
				color: '#000',
				backgroundColor,
				border: '1px solid gray',
				cursor: pointer ? 'pointer' : 'none',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{label || children}
		</div>
	);
};

export default Cell;
