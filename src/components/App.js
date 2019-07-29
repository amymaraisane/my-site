import React, {Component} from 'react';
import Project from './Project';
import '../stylesheets/index.css';
import PropTypes from 'prop-types'
import Nav from './Nav';

class App extends Component{
  static defaultProps = {
    projects: [{
      title: "Music Forum",
      img: "/imgs/forum-landingpage.png",
      alt: "Music Forum Landing Page showing record player"
    }]
  }



  static propTypes = {
    about: PropTypes.arrayOf(PropTypes.string).isRequired
}

  render() {
    //css instructions added as a variable pointing to a style object written in jsx!
    return (
      <div className= "projectCollection">
        <Nav />
        {this.props.projects.map((p)=>(
          <Project title={p.title}
                    img={p.img}
                    alt={p.alt}
                    about= {["Built with Node, Express, and MongoDB", "97% lighthouse best practices"]}
          />
        ))}
        <div className= "project">
          < Project />
        </div>
        <div className= "project">
          <Project title="Music Forum" 
            img= "/imgs/forum-landingpage.png" 
            alt= "Music Forum Landing Page showing record player"
            about = {["Built with Node, Express, and MongoDB", "97% lighthouse best practices"]}
          />  
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