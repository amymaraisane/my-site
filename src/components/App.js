import React, {Component} from 'react';
import ProjectList from './ProjectList';
import '../stylesheets/app.css';
import Nav from './Nav';
import Bio from './Bio';
import Contact from './Contact';

class App extends Component{

  render() {
    return (
      <div className= "projectCollection">
        <Nav />
        <Bio />
        <ProjectList />
        <Contact />
      </div> 
      );
  }
}

export default App;

