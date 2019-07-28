import React, {Component} from 'react';
import SiteData from './SiteData';
import '../project.css';
import PropTypes from 'prop-types'


class Project extends Component{
  render(){
    //css instructions added as a variable pointing to a style object written in jsx!
    return (
          <SiteData title="Music Forum" 
                    img= "/imgs/forum-landingpage.png" 
                    alt= "Music Forum Landing Page showing record player"
                    about = {["Built with Node, Express, and MongoDB", "97% lighthouse best practices"]}
          />
      );
  }
}

Project.propTypes = {

}

export default Project;