import React from "react";

import FruitBasket from "./FruitBasket";
import Filter from "./Filter";
import FilteredFruitList from "./FilteredFruitList.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  handleFilterChange = (e) => {
    console.log("new filter: ", e.target.value);
    this.setState({ currentFilter: e.target.value });
  };

  componentDidMount() {
    fetch("/api/fruit")
      .then((response) => response.json())
      .then((fruit) => this.setState({ fruit }));
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch("/api/fruit_types")
      .then((response) => response.json())
      .then((filters) => this.setState({ filters }));
  };

  render() {
    console.log(this.state.currentFilter);
    return (
      <div>
        <Filter
          filters={this.state.filters}
          handleChange={this.handleFilterChange}
        />
        {this.state.currentFilter === "all" ? (
          <FruitBasket
            fruit={this.state.fruit}
            filters={this.state.filters}
            currentFilter={this.state.currentFilter}
            updateFilterCallback={this.handleFilterChange}
          />
        ) : (
          <FilteredFruitList
            fruit={this.state.fruit}
            filter={this.state.currentFilter}
          />
        )}
      </div>
    );
  }
}

export default App;
