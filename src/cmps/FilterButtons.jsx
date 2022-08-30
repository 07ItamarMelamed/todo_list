import { Component } from "react";
import { Link } from "react-router-dom";

class FilterButtons extends Component {
  render() {
    return (
      <div>
        <div className="container jumbotron addBox">
          <div className="row">
            <div className="col">
              <Link className="filterButton" to="/all">
                ALL
              </Link>
            </div>
            <div className="col">
              <Link className="filterButton" to="/completed">
                COMPLETED
              </Link>
            </div>
            <div className="col">
              <Link className="filterButton" to="/left">
                LEFT
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterButtons;
