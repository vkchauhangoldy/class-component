import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // state holds the count
    this.state = {
      count: 0,
    };
  }

  // increase count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // decrease count
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // reset count
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container">
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment} style={{ margin: "5px" }}>
          Increment
        </button>
        <button onClick={this.decrement} style={{ margin: "5px" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
