import React, { Component } from 'react'
import '../stylesheets/image.css'

export class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: this.props.visibility
        }
    }

    render() {

        return (
            <div className="col-sm-3 d-none d-sm-block"> <a href={this.props.href}><img id={this.props.id} alt={this.props.alt} src={this.props.src} style={this.props.style}></img></a></div>
        )
    }
}

export default Image