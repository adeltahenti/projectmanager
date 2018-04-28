import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';


class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.id} todo={todo} />
        );
      });
    }
    return (
      <div className="Todos">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>Todo List</h4>
          </li>
          {todoItems}
        </ul>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
