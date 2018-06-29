import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';
import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: [],
      fruit: [],
      currentFilter: null,
    };
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  };

  fetchFruit = () => {
    return fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  };

  handleChange = event => {
    this.setState({ currentFilter: event.target.value });
  };

  updateFilter = event => {
    this.setState({ currentFilter: event.target.value });
  };

  // filterFruit = () => {
  //   // if (!this.state.filter || !this.state.filter === 'all') {
  //   const filteredFruit = this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);
  //   this.setState({ fruit: filteredFruit });
  //   // } else {
  //   //   this.fetchFruit();
  //   // }
  // };

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
  }
}

export default App;
