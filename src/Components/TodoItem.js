import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
  render() {
    return (
      <li className="Project collection-item">
        <span style={{fontWeight:'bold'}}>Id: </span>{this.props.todo.id} - <span style={{fontWeight:'bold'}}>Title: </span>{this.props.todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
