import React, { Component } from 'react';
import '../stylesheets/project.css';
import PropTypes from 'prop-types';
 

export default class Project extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    about: PropTypes.arrayOf(PropTypes.string).isRequired
}

  render(){
    const {title, img, alt, src, id} = this.props;
    const about = this.props.about.map((item, index)=>(
      <li key={index}>{item}</li>
    ));
  
    return (
      <div className="demo">
        <a target= "_blank" href = {src}><img src= {img} alt={alt} id={id}/></a>
        
        <h2 className="name">{title}</h2>
        <ul id="projectUL">
          {about}
        </ul>
    </div> 
    );
  }
}

//IMPORTANT- when using an array method, each item in the array must be assigned a unique key for React's rendering
//in this case we'll just use the index but keep in mind this is not good practice if array may change

//the props passed in using spread operator can be accessed by using just this.props.eachOne
//we DO need to set the passed in props equal to a variable in order to use them, 
//otherwise we would have to use this.props.eachOne

