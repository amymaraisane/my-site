import React, { Component } from 'react';
import '../stylesheets/methods.css';

export class Methods extends Component {
    render() { 
        return (
            <div className= "methods">
                {this.props.children}
            </div>
        )
    }
}

export default Methods
