import { Component } from "react";
import CheckboxPreview from "../cmps/CheckboxPreview";

class CheckboxList extends Component {
  constructor(props) {
    super(props);
    this.onRemoveCheckbox = props.onRemoveCheckbox.bind(this);
  }

  render() {
    const { list } = this.props;
    return (
      <section>
        <ul>
          {list.map((checkbox) => (
            <CheckboxPreview
              key={checkbox.id}
              id={checkbox.id}
              todo={checkbox.todo}
              completed={checkbox.completed}
              onRemove={this.onRemoveCheckbox}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default CheckboxList;
