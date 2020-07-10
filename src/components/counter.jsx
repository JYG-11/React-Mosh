import React, { Component } from "react";

class Counter extends Component {
  //state is a keyword that acts like a dict
  //but in fact it is actually an object
  //count is unique for each class instance
  //all instance variables are stored here
  state = {
    count: 1,
    tags: [],
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
    //if the length of tags changes
    //the page will automatically update
    //you can write any javascript expression
    //between the curly braces and tags
    //you can even call on a function
    //and display the result
    //the boolean expression evaluates to the string
    //this is because only the last value is looked at
    //if all of the former values are truthy

    return (
      <div>
        {this.renderTags()}
        {this.state.tags.length === 0 && "Please create a new tag"}
      </div>
    );
  }
}

export default Counter;
