import React, { Component } from 'react';
import '../stylesheets/project.css';
import Description from './Description';
 

export default class Project extends Component{

  render(){
    
    //use parens with map for one line return statement, then dont need return keyword
    //assign result of map logic to a variable, also reduces 'this' keyword confusion

    return (
      //any jsx elements that are returned must be wrapped into one div, cant return multiple
     <Description />
    );
  }
}

//IMPORTANT- when using an array method, each item in the array must be assigned a unique key for React's rendering
//in this case we'll just use the index but keep in mind this is not good practice if array may change

//cannot return multiple componenents next to each other, must put inside of one DOM element
//return ReactDOMFactories.div(null, h2, img);


