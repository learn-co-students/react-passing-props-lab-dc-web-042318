import React from "react";

import FruitBasket from "./FruitBasket";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    };
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  };

  componentDidMount() {
    fetch("/api/fruit")
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  updateFilterCallback = e => {
    console.log("new filter: ", e.target.value);
    this.setState({ currentFilter: e.target.value });
  };

  render() {
    return (
      <div>
        <FruitBasket
          filters={this.state.filters}
          fruit={this.state.fruit}
          currentFilter={this.state.currentFilter}
          updateFilterCallback={this.updateFilterCallback}
        />
      </div>
    );
  }
}

export default App;
