import React, { Component } from "react";

const FilteredFruitList = props => {
  const list =
    !props.filter || props.filter === "all"
      ? props.fruit
      : props.fruit.filter(i => i.fruit_type === props.filter);

  return (
    <ul className="fruit-list">
      {list.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
};

// class FilteredFruitList extends Component {
//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     items: []
//   //   };
//   // }

//   // componentDidMount() {
//   //   fetch('/api/fruit')
//   //     .then(response => response.json())
//   //     .then(items => this.setState({ items }));
//   // }

//   render() {
//     const list =
//       !this.props.filter || this.props.filter === "all"
//         ? this.props.items
//         : this.props.items.filter(i => i.fruit_type === this.props.filter);

//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }

export default FilteredFruitList;
