import React from "react";

import FruitBasket from "./FruitBasket";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fruit: [],
			filters: [],
			currentFilter: null
		};
		this.fetchFilters = this.fetchFilters.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	fetchFilters() {
		fetch("/api/fruit_types")
			.then(response => response.json())
			.then(filters => this.setState({ filters }));
	}

	componentDidMount() {
		fetch("/api/fruit")
			.then(response => response.json())
			.then(items => this.setState({ fruit: [...items] }));
		this.fetchFilters();
	}

	handleFilterChange(event) {
		console.log("new filter: ", event.target.value);
		this.setState({ currentFilter: event.target.value });
	}

	render() {
		return (
			<div>
				<FruitBasket
					currentFilter={this.state.currentFilter}
					updateFilterCallback={this.handleFilterChange}
					filters={this.state.filters}
					fruit={this.state.fruit}
				/>
			</div>
		);
	}
}

export default App;
