import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectItem extends Component {
  deleteProject (id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project collection-item">
        <span style={{fontWeight:'bold'}}>Title: </span>{this.props.project.title} - <span style={{fontWeight:'bold'}}>Category: </span>{this.props.project.category} <a href="#." onClick={this.deleteProject.bind(this, this.props.project.id)}><i className="material-icons right">close</i></a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
