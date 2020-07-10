import React, { Component } from "react";

class Counter extends Component {
  //state is a keyword that acts like a dict
  //but in fact it is actually an object
  //count is unique for each class instance
  //all instance variables are stored here
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //render is a keyword that acts like a main
  //all methods are defined like this
  render() {
    //if the value of count changes
    //the page will automatically update
    //you can write any javascript expression
    //between the curly braces and tags
    //you can even call on a function
    //and display the result

    return <div>{this.renderTags()}</div>;
  }
}

export default Counter;
