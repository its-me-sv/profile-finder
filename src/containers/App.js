import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ""
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({robots:users}));
	}

	onSearchChanged = (event) => {
		this.setState({searchField: event.target.value})
	}

	render() {
		const {robots, searchField} = this.state;
		const filteredBots = robots.filter(robot => robot
			.name.toLowerCase().includes(searchField.toLowerCase()));

		return !robots.length ? <h1>Its Loading</h1> :
			 (
				<div className="tc">
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChanged}/>
					<Scroll>
						<CardList robots={filteredBots}/>
					</Scroll>
				</div>
			);
	}
}

export default App;