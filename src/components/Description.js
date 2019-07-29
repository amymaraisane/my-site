import React, { Component } from 'react';
import '../stylesheets/project.css';

class Description extends Component {

    render() {
        const liStyle = {fontSize: '1em', color: 'rgb(250, 250, 250)'};
        
        return (
            <ul>
                {this.props.projects.about.map((item, index)=>(
                    <li key={index} style={liStyle}>{item}</li>
                ))}
            </ul>
        )
    }
}


export default Description


//have to keep reference to this
