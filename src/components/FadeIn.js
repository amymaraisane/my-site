import React, { Component } from 'react';
import classNames from 'classnames';
import '../stylesheets/bio.css';

export class FadeIn extends Component {
    constructor(props){
        super(props);
        this.state = { loaded: true};
    };

    getInitialState() {
        this._ismounted = true;
        return {
            loaded: false
        };
    }

    onImageLoad() {
        if (this._ismounted) {
            this.setState({ loaded: true});
        }
    } 

    componentDidMount() {
        var imgTag = this.refs.img;
        var imgSrc = imgTag.getAttribute('src');
        var img = new window.Image();
        img.onload = this.onImageLoad;
        img.src = imgSrc;
    }

    
    render() {
        var { className, ...props } = this.props;
        var imgClasses = 'img';
        var rootClassName = className ? className + ' img' : 'img';
        if (this.state.loaded) {
            rootClassName += ' img-loaded';
        }
        return (
            <img ref="img" {...props} className= {rootClassName} />
        )
    }
}

export default FadeIn
