import React, { Component } from "react";

class Counter extends Component {
  //state is a keyword that acts like a dict
  //but in fact it is actually an object
  //count is unique for each class instance
  //all instance variables are stored here
  state = {
    count: 0,
  };

  //render is a keyword that acts like a main
  //all methods are defined like this
  render() {
    //if the value of count changes
    //the page will automatically update
    //you can write any javascript expression
    //between the curly braces and tags
    //you can even call on a function
    //and display the result
    let classes = "badge m-2 ";
    classes += this.state.count === 0 ? "badge-warning" : "badge-primary";

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-small">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
