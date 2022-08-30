import { Component } from "react";

class AddCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
    this.onAddCheckbox = props.onAddCheckbox.bind(this);
  }

  handleChange = (e) => {
    this.setState((state) => {
      let target = e.target;
      state[target.name] = target.value;
      return state;
    });
  };

  render() {
    const { list } = this.props;
    const { todo } = this.state;
    return (
      <div className="container jumbotron SpaceFromNav">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control listing"
              onChange={this.handleChange}
              name="todo"
              placeholder="What do you need to do today?"
              value={todo}
            />
          </div>
          <div className="col-4">
            <button
              type="button"
              className="btn btn-primary addButton-offset button-right"
              onClick={() => this.onAddCheckbox(todo, list)}
            >
              Add
            </button>
          </div>
          <div className="SpaceFromList"></div>
        </div>
      </div>
    );
  }
}

export default AddCheckbox;
