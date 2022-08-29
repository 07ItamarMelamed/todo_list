import { Component } from "react";

class AddCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }

  handleChange = (e) => {
    this.setState((state) => {
        let target = e.target;
        state[target.name] = target.value;
        return state;
    })
  }

  render() {
    const { onAddCheckbox } = this.props;
    return (
      <div className="container jumbotron">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="todo"
              placeholder="What do you need to do today?"
              value={this.state.todo}
            />
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onAddCheckbox(this.state.todo)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCheckbox;
