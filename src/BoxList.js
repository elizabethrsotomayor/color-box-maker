import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuidv4 } from "uuid";

class BoxList extends Component {
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.addBox = this.addBox.bind(this);
    this.renderBoxes = this.renderBoxes.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    let newBox = { ...box, id: uuidv4() };
    this.setState((state) => ({
      boxes: [...state.boxes, newBox],
    }));
  }

  removeBox(id) {
    this.setState((st) => ({
      boxes: st.boxes.filter((el) => el.id !== id),
    }));
  }

  renderBoxes() {
    return (
      <div>
        {this.state.boxes.map((box) => (
          <div key={box.id}>
            <Box
              key={box.id}
              color={box.bgColor}
              width={box.width}
              height={box.height}
            />
            <button onClick={() => this.removeBox(box.id)}>Remove box?</button>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
