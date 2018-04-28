import React, { Component } from 'react';
import ProjectItem from './ProjectItem';


class AddProject extends Component {
  render() {
    return (
      <div>
        <h3>Add Project</h3>
        <div className="row">
          <form action="" className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input type="text" id="title" className="validate" ref="title"/>
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s6">
                <select name="category" id="category" ref="category">
                  <option value="" disabled selected>Choose your Category</option>
                  <option value="Web Design" className="opt">Web Design</option>
                  <option value="Mobile Development" className="opt">Mobile Development</option>
                  <option value="Web Development" className="opt">Web Development</option>
                </select>
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 left-align">
                <input type="submit" className="waves-effect waves-light btn pink darken-4" value="Submit"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProject;