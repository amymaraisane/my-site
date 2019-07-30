import React, { Component } from 'react';
import '../stylesheets/project.css';
import ProjectList from './ProjectList';
 

export default class Project extends Component{

  render(){

    return (
      <div className="card">
        <img src= {this.props.img} alt={this.props.alt} />
        <h2 className="name" style={{fontFamily: 'Permanent Marker'}}>{this.props.title}</h2>
        <ul>
            {this.props.about.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
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

