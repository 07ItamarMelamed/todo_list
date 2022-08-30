import { Component } from "react";

class CheckboxPreview extends Component {
  constructor(props) {
    super(props);
    this.onRemoveCheckbox = props.onRemove.bind(this);
    this.onFlipCheck = props.onFlipCheck.bind(this);
  }

  render() {
    const { id, todo, completed, list } = this.props;
    return (
      <div>
        <div className="container jumbotron">
          <div className="row">
            <div className="col listing">
              <div className="pretty p-default">
                {completed ? (
                  <input type="checkbox" onChange={() => this.onFlipCheck(id, list)} defaultChecked />
                ) : (
                  <input type="checkbox" onChange={() => this.onFlipCheck(id, list)}/>
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
                onClick={() => this.onRemoveCheckbox(id, list)}
              >
                🗑
              </button>
            </div>
            <div className="SpaceFromList"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxPreview;
