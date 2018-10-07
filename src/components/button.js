import React from 'react';

const button = (props) => (
	<button className={props.display} onClick={() => props.action()}>{props.value}</button>
);

export default button;