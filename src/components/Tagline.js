import React, { Component } from 'react';
import '../stylesheets/tagline.css';

export class Tagline extends Component {
    render() {


        return (
            <div id="text" style={this.props.divStyle} className={this.props.cols}>
                <h1 style={this.props.style}>{this.props.text}</h1>
            </div>
        )
    }
}

export default Tagline
