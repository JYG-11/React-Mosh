import React, { Component } from "react";

class Counter extends Component {
  //state is a keyword that acts like a dict
  //but in fact it is actually an object
  //count is unique for each class instance
  //all instance variables are stored here
  state = {
    count: 1,
  };

  //render is a keyword that acts like a main
  //all methods are defined like this
  render() {
    //if the value of count changes
    //the page will automatically update
    //you can write any javascript expression
    //between the curly braces and tags
    return (
      <div>
        <h1>{this.state.count % 2 === 0 ? "Even" : "Odd"}</h1>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
