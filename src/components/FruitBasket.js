import React, { Component } from "react";

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

// handleFilterChange = event => {
//   console.log('new filter: ', event.target.value);
//   this.setState({ selectedFilter: event.target.value });
// }

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <p>{props.fruit.map((fruit) => fruit.char)}</p>
    </div>
  );
};

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
};

export default FruitBasket;
