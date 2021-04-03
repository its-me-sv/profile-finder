import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChanged: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
};

function App(props){
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		robots: [],
	// 		searchField: ""
	// 	}
	// }
	// const [robots, setRobots] = useState([]);
	// const [searchField, setSearchField] = useState("");
	// componentDidMount() {
	// 	fetch("https://jsonplaceholder.typicode.com/users")
	// 	.then(response => response.json())
	// 	.then(users => this.setState({robots:users}));
	// }

	//Alternate for componentDidMount()
	const {onRequestRobots} = props;
	
	useEffect(() => {
		onRequestRobots();
	}, [onRequestRobots]);

	// const onSearchChanged = (event) => {
	// 	setSearchField(event.target.value);
	// }
	const {searchField, onSearchChanged, robots, isPending} = props;
	const filteredBots = robots.filter(robot => robot
		.name.toLowerCase().includes(searchField.toLowerCase()));

	return isPending ? <h1>Its Loading</h1> :
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

export default connect(mapStateToProps, mapDispatchToProps)(App);