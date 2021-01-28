import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<div className="pa2">
			<input
				className="tc pa3 ba b--solid bw2 br-pill b--black bg-lightest-blue"
				type="text"
				placeholder="Search Robots"
				onChange={searchChange}
			/>
		</div>);
};

export default SearchBox;