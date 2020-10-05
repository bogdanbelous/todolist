import React, { Component } from "react";
import "./todoList.css";
import ListRow from "./TodoListRow";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      text: ""
    };
  }

  componentDidMount() {
    this.header.addEventListener(
      "keypress",
      e => e.keyCode === 13 && this.addItem()
    );
  }

  addItem = () => {
    if (!this.state.text) return;

    const newItem = {
      text: this.state.text,
      key: Date.now(),
      isDone: false
    };

    this.setState(prevState => {
      return {
        text: "",
        items: [...prevState.items, newItem]
      };
    });
  };

  changeStatus = key => {
    var updateStatus = this.state.items.filter(item => {
      if (item.key === key) {
        // console.log("key " + key);
        // console.log("value " + item.text);
        if (item.isDone === false) {
          item.isDone = true;
        } else {
          item.isDone = false;
        }
        // console.log("isDone status " + item.isDone);
      }
      return item.key;
    });

    this.setState({
      items: [...updateStatus]
    });
  };

  changeInputText = ({ target }) => {
    this.setState({ text: target.value });
  };

  changeItemText = (index, value) => {
    // console.log("value: " + value);

    const items = [...this.state.items];
    items[index].text = value;

    this.setState({ items });
  };

  deleteItem = key => {
    let items = [...this.state.items];
    items = items.filter(item => item.key !== key);

    this.setState({ items });
  };

  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <div className="todoListMain">
          <div className="header" ref={ref => (this.header = ref)}>
            <input
              onChange={e => this.changeInputText(e)}
              value={this.state.text}
              placeholder="Enter task"
            ></input>
            <button onClick={this.addItem}>Add</button>
          </div>
          <ul className="theList">
            {this.state.items.map((item, index) => (
              <ListRow
                changeStatus={this.changeStatus}
                changeItemText={this.changeItemText}
                deleteItem={this.deleteItem}
                item={item}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
