import { Component } from "react";
import CheckboxList from "./CheckboxList";

class AllPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState((state, props) => {
      state.list = props.list;
      return state;
    });
  }

  render() {
    const { list } = this.state;
    const { onRemoveCheckbox } = this.props;
    return (
      <div>
        <CheckboxList
        list={list}
        onRemoveCheckbox={onRemoveCheckbox} />
      </div>
    );
  }
}

export default AllPage;
