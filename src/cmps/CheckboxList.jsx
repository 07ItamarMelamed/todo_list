import { Component } from "react";
import CheckboxPreview from "../cmps/CheckboxPreview"

class CheckboxList extends Component {
  render() {
    const { list, onRemoveCheckbox } =
      this.props;
    return (
      <section>
        <ul>
          {
            list.map((checkbox) => (
              <CheckboxPreview
                key={checkbox.id}
                id={checkbox.id}
                todo={checkbox.todo}
                completed={checkbox.completed}
                onRemove={onRemoveCheckbox}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default CheckboxList;
