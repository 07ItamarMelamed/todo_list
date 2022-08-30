import { Component } from "react";
import CheckboxList from "./CheckboxList";

class FilterLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.onRemoveCheckbox = props.onRemoveCheckbox.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => {
      state.list = props.list.filter((checkbox) => !checkbox.completed);
      return state;
    });
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <CheckboxList
        list={list}
        onRemoveCheckbox={this.onRemoveCheckbox} />
      </div>
    );
  }
}

export default FilterLeft;
