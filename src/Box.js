import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color,
          width: `${this.props.width}px`,
          height: `${this.props.height}px`,
        }}
      ></div>
    );
  }
}
export default Box;
