import React, { Component } from "react";

import Filter from "./Filter";
import FilteredFruitList from "./FilteredFruitList.js";

const FruitBasket = props => (
  <div className="fruit-basket">
    <Filter handleChange={props.updateFilterCallback} filters={props.filters} />
    <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
  </div>
);

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
};

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     // this.state = {
//     //   // filters: [],
//     //   // selectedFilter: null
//     // };
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.props.handleFilterChange} />
//         <FilteredFruitList filter={this.props.selectedFilter} />
//       </div>
//     );
//   }
// }

export default FruitBasket;
