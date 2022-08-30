import { Component } from "react";
import CheckboxList from "./CheckboxList";

class FilterAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.onRemoveCheckbox = props.onRemoveCheckbox.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => {
      state.list = props.list;
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

export default FilterAll;
