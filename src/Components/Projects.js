import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class Projects extends Component {
  deleteProject (id) {
    this.props.onDelete(id);
  }
  
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Projects">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>My Projects</h4>
          </li>
          {projectItems}
        </ul>
      </div>
    );
  }
}

export default Projects;
