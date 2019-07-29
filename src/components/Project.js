import React, { Component } from 'react';
import '../stylesheets/project.css';
import ProjectList from './ProjectList';
 

export default class Project extends Component{

  render(){
    return (
     <ProjectList />
    );
  }
}

//IMPORTANT- when using an array method, each item in the array must be assigned a unique key for React's rendering
//in this case we'll just use the index but keep in mind this is not good practice if array may change



