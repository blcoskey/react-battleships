import React from 'react';
import { useDrag } from 'react-dnd';

export const DragShip = ({ type }) => {
	const [{ isDragging }, drag] = useDrag({
		item: { type },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<>
			<div
				ref={drag}
				style={{
					cursor: 'move',
					background: isDragging ? '#fff' : '#111',
					width: '100%',
					height: '100%',
				}}
			></div>
		</>
	);
};
