import { Component } from "react";

class CheckboxPreview extends Component {
  constructor(props) {
    super(props);
    this.onRemoveCheckbox = props.onRemove.bind(this);
  }
  render() {
    const { id, todo, completed } = this.props;
    return (
      <div>
        <div className="container jumbotron">
          <div className="row">
            <div className="col">
              <div className="pretty p-default">
                {completed ? (
                  <input type="checkbox" defaultChecked />
                ) : (
                  <input type="checkbox" />
                )}
                <div className="state p-primary-o">
                  <label className="whiteText">{todo}</label>
                </div>
              </div>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary button-right"
                onClick={() => this.onRemoveCheckbox(id)}
              >
                🗑
              </button>
            </div>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxPreview;
