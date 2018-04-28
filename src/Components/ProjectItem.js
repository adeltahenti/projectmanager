import React, { Component } from 'react';


class ProjectItem extends Component {
  render() {
    return (
      <li className="Project collection-item">
        <span style={{fontWeight:'bold'}}>Title: </span>{this.props.project.title} - <span style={{fontWeight:'bold'}}>Category: </span>{this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
