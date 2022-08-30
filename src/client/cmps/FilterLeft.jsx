import { Component } from "react";
import CheckboxList from "./CheckboxList";

class FilterLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.onRemoveCheckbox = props.onRemoveCheckbox.bind(this);
    this.onFlipCheck = props.onFlipCheck.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => {
      state.list = props.list;
      return state;
    });
  }

  render() {
    const list = this.state.list.filter((checkbox) => !checkbox.completed);
    return (
      <div>
        <CheckboxList
          list={list}
          onFlipCheck={this.onFlipCheck}
          onRemoveCheckbox={this.onRemoveCheckbox}
        />
      </div>
    );
  }
}

export default FilterLeft;
