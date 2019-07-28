import React, { Component } from 'react';
import '../project.css';

export default class SiteData extends Component{
  render(){
    const liStyle = {fontSize: '1em', color: 'rgb(250, 250, 250)'};
    const imgStyle = {width:'500px', height:'400px'};
    const h2Style = {color: "rgb(50, 0, 255)", fontSize: '2em', margin: '0'};

    //shorthand for title = this.props.title
    const {title} = this.props;
    const {img} = this.props;
    const {alt} = this.props;
    //use parens with map for one line return statement, then dont need return keyword
    //assign result of map logic to a variable, also reduces 'this' keyword confusion
    const about = this.props.about.map((item, index)=>(
      <li key={index} style={liStyle}>{item}</li>
    ));

    return (
      <div className="card">
        <h2 className="name" style={{fontFamily: 'Permanent Marker'}}>{title}</h2>
        <img style={imgStyle} src= {img}
        alt={alt} />
        <h5 style={h2Style}>About:</h5>
        <ul>
          {about}
        </ul>
      </div>
    );
  }
}

//IMPORTANT- when using an array method, each item in the array must be assigned a unique key for React's rendering
//in this case we'll just use the index but keep in mind this is not good practice if array may change

//cannot return multiple componenents next to each other, must put inside of one DOM element
//return ReactDOMFactories.div(null, h2, img);


