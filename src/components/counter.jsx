import React, { Component } from "react";

class Counter extends Component {
  //state is a keyword that acts like a dict
  //but in fact it is actually an object
  //count is unique for each class instance
  //all instance variables are stored here
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  //render is a keyword that acts like a main
  //all methods are defined like this
  render() {
    //if the value of count or imageUrl changes
    //the page will automatically update
    //you can write any javascript expression
    //between the curly braces and tags
    //you can even call on a function
    //and display the result
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
