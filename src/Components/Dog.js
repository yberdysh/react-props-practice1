import React from "react";

class Dog extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

export default Dog;
