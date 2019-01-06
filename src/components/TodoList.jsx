import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

class TodoList extends Component {

  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.props.addItem} >
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <button type="submit" > Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList