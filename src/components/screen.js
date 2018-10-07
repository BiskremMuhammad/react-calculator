import React from 'react';

const screen = (props) => (
	<div className="screen">
		<span className='history'>{props.history}</span>
		<span className='result'>{props.result}</span>
	</div>
);

export default screen;