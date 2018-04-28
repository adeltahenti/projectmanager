import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import axios from 'axios';
import request from 'superagent';
import Projects from './Components/Projects';
import AddProject from './Components/AddPorject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: [],
      todos: []
    }
  }

  // Get data with superagent module
  getTodosSuperAgent() {
    request.get('https://jsonplaceholder.typicode.com/todos')
      .accept('json')
      .then(response => this.setState({
        todos: response.body
      }))
      .catch(err => console.log(err));
  }

  // Get data with axios module
  getTodosAxios() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => this.setState({
        todos: response.data
      }))
      .catch(err => console.log(err));
  }

  // Get data with jquery module
  getTodos () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({todos: data});
      }.bind(this),
      error: (xhr, status, err) => {
        console.log(err);
      } 
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  componentWillMount () {
    this.getProjects();
    // this.getTodos();
    // this.getTodosAxios();
    this.getTodosSuperAgent();
  }

  componentDidMount () {    
    // this.getTodos();
    // this.getTodosAxios();
    this.getTodosSuperAgent();
  }

  handleAddProject (project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({
      projects: projects
    });
  }

  handleDeleteProject (id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="center-align">My App</h1>
          <AddProject addProject={this.handleAddProject.bind(this)}/>   
          <hr/>
          <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
          <hr/>
          <Todos todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
