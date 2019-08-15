import React, { Component } from 'react'

export class Tagline extends Component {
    render() {


        return (
            <div className = "row">
                 <div className={this.props.cols}><h1 style={this.props.style}>{this.props.text}</h1></div>
            </div>
        )
    }
}

export default Tagline
