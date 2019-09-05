import React, { Component } from 'react';
import '../stylesheets/bio.css';
import Image from './Image';
import About from './About';
import Tagline from './Tagline';

export class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { visibility: "hidden"}

        setTimeout(()=>{
            this.setState({ visibility: "visible" })
        }, 1000);
    }
    render() {

        const imgStyle = {
            visibility: this.state.visibility,
            border: "1px solid black"
        }

        const textStyle = {
            maxWidth: '50%',
            fontWeight: 'bold', 
            fontFamily: `Didact Gothic`,
        }

        const divStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div className="row no-gutters">
                            <Tagline text="Build" cols="col-sm-3 col align-self" divStyle= {divStyle} style={textStyle}/>
                            <Image src="/imgs/lesotho-580w56kb.jpg" id="img1" alt="Lesotho travel site" style={imgStyle} href="#lesotho" />
                            <div id="largeDream" style= {divStyle} className="col-sm-6"> <h1 style={this.props.textStyle}>DREAM</h1></div>
                            <Image src="/imgs/color-craze-580w90kb.jpg" id="img2" alt="Color Craze game site" style={imgStyle} href="#color-craze"/>
                            <Tagline text="Your" cols="col-sm-3" divStyle= {divStyle} style={textStyle}/>
                            <Image src="/imgs/music-forum-580w44kb.jpg" id="img3" alt="Music Forum site" style={imgStyle} href="#music-forum"/>
                            <Image src="/imgs/netflix-watchlist-full-580w19kb.jpg" id="img4" alt="Netflix watchlist site" style={imgStyle} href="#netflix-watchlist"/>
                            <div id="smallDream" className="d-sm-none" style= {divStyle}> <h1 style={textStyle} >Dream</h1></div> 
                        </div>
                    </div>
                </div>
                <About />
            </div> 
        )
    }
}

export default Bio
