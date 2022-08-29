import { Component } from "react";

class CheckboxPreview extends Component {
  render() {
    const { id, todo, completed, onRemove } = this.props;
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
                  <label>{todo}</label>
                </div>
              </div>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => onRemove(id)}
              >
                🗑
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxPreview;
