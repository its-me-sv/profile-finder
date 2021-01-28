import React from 'react';

const COLORS = ["green", "red", "yellow", "purple", "pink", "blue", "green", "blue", "red", "yellow", "purple"];

const Card = (props) => {
	const {name, email, id} = props.userObj;
	return (
		<div className={`tc bg-light-${COLORS[id]} ba b--solid b--black bw2 shadow-7 grow ma3 dib br4 pa3`}>
			<img alt="images" src={`https://robohash.org/${id}`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
};

export default Card;