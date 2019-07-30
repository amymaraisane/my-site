import React, { Component } from 'react';
import '../stylesheets/project.css';
 

export default class Project extends Component{

  render(){
    const {title, img, alt} = this.props;
    const about = this.props.about.map((item, index)=>(
      <li key={index}>{item}</li>
    ));
  
    return (
      <div className="demo">
        <img src= {img} alt={alt} />
        <h2 className="name" style={{fontFamily: 'Permanent Marker'}}>{title}</h2>
        <ul>
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

