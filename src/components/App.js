import React, {Component} from 'react';
import Project from './Project';
import '../stylesheets/index.css';
import Nav from './Nav';

class App extends Component{

  render() {
    //css instructions added as a variable pointing to a style object written in jsx!
    return (
      <div className= "projectCollection">
        <Nav />
        <div className= "project">
          <Project />  
        </div>
        
        <div>
          <p>Box2</p>
        </div>
      </div>
      );
  }
}

export default App;

//when an array passed as a prop to a component it needs to be inside a javascript object
//if part