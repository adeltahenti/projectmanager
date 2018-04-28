import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
constructor () {
  super();
  this.state = {
    newProject: {},
    msg: ''
  }
}

  static defaultProps = {
    categories: [
      'Web Design',
      'Mobile Development',
      'Web Development'
    ]
  }

  handleSubmit (e) {
    if (this.refs.title.value === '') {
      this.setState({msg:'Title required'});
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        },
        msg: ''
      }, () => {
        this.props.addProject(this.state.newProject);
      });
      this.refs.title.value = '';
      this.refs.title.focus();
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)} className="col s12">
            <div className="row">
              <p>{this.state.msg}</p>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input type="text" id="title" className="validate" ref="title"/>
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s6">
                <select name="category" id="category" ref="category">
                  {categoryOptions}
                </select>
                <label htmlFor="category">Category</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 left-align">
                <input type="submit" className="waves-light btn pink darken-4" value="Submit"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProject;