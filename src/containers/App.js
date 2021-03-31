import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App(){
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchField: ""
	// 	}
	// }
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState("");
	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 	.then(response => response.json())
	// 	.then(users => this.setState({robots:users}));
	// }

	//Alternate for componentDidMount()
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
	 	.then(response => response.json())
	 	.then(users => setRobots(users));
	}, []);

	const onSearchChanged = (event) => {
		setSearchField(event.target.value);
	}
	
	const filteredBots = robots.filter(robot => robot
		.name.toLowerCase().includes(searchField.toLowerCase()));

	return !robots.length ? <h1>Its Loading</h1> :
		 (
			<div className="tc">
				<h1>RoboFriends</h1>
				<SearchBox searchChange={onSearchChanged}/>
				<Scroll>
					<CardList robots={filteredBots}/>
				</Scroll>
			</div>
		);
}

export default App;