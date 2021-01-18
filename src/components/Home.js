import React, {Component} from 'react';
import '../stylesheets/app.css';
import BuildDreamCards from './BuildDreamCards';
import About from './About';
import Footer from './Footer';

class App extends Component{

  render() {
    return (
      <div className= "projectCollection">
        <BuildDreamCards />
        <About />
        <Footer />
      </div> 
      );
  }2
}

export default App;