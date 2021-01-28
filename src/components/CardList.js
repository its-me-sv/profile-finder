import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	const CardArray = robots.map((uo, pos) => {
		return (<React.Fragment key={uo.id}>
					<Card userObj={uo} />
				</React.Fragment>);
	});
	return (<div>
				{CardArray}
			</div>
		);
};

export default CardList;