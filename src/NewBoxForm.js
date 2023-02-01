import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", bgColor: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: "", height: "", bgColor: "" });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Box Maker Thingy</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width:</label>
          <input
            id="width"
            name="width"
            type="text"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="backgroundColor">Background color:</label>
          <input
            id="bgColor"
            name="bgColor"
            type="text"
            value={this.state.bgColor}
            onChange={this.handleChange}
          />
          <br />
          <button>Add a new box</button>
        </form>
      </div>
    );
  }
}
export default NewBoxForm;
