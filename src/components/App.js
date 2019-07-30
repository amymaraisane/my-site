import React, {Component} from 'react';
import Project from './Project';
import ProjectList from './ProjectList';
import '../stylesheets/app.css';
import Nav from './Nav';
import Bio from './Bio';

class App extends Component{

  render() {
    //css instructions added as a variable pointing to a style object written in jsx!
    return (
      <div className= "projectCollection">
        <Nav />
        <Bio />
        <ProjectList />
      </div> 
      );
  }
}

export default App;

//when an array passed as a prop to a component it needs to be inside a javascript object
//if part