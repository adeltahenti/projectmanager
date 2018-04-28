import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddPorject';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount () {
    this.setState({
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="center-align">My App</h1>
          <AddProject />
          <br/>
          <hr/>
          <br/>
          <Projects projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default App;
