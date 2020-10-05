import React, { Component } from "react";

class TodoListRow extends Component {
  render() {
    return (
      <li className="todoItem" ref={ref => (this.header = ref)}>
        <div className="check">
          <button
            className={
              "checkButton" + (this.props.item.isDone ? "Done" : "NotDone")
            }
            onClick={() => this.props.changeStatus(this.props.item.key)}
          >
            ✓
          </button>
        </div>

        <input
          className={
            "todoText text" + (this.props.item.isDone ? "Done" : "NotDone")
          }
          onChange={e =>
            this.props.changeItemText(this.props.index, e.target.value)
          }
          ref={ref => (this.input = ref)}
          value={this.props.item.text}
        />

        <div className="delete">
          <button
            className="deleteButton"
            onClick={() => this.props.deleteItem(this.props.item.key)}
          >
            ✕
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListRow;
