import React, { Component } from 'react';
import '../stylesheets/bio.css';
import Image from './Image';
import About from './About';

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
            visibility: this.state.visibility
        }

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div className="row no-gutters">
                            <Image src="/imgs/lesotho-travel-site.png" id="img1" alt="Lesotho travel site" style={imgStyle} href="#lesotho" />
                            <Image src="/imgs/color-craze.png" id="img2" alt="Color Craze game site" style={imgStyle} href="#color-craze"/>
                            <Image src="/imgs/music-forum.png" id="img3" alt="Music Forum site" style={imgStyle} href="#music-forum"/>
                            <Image src="/imgs/netflix-watchlist-full.png" id="img4" alt="Netflix watchlist site" style={imgStyle} href="#netflix-watchlist"/>
                     </div>
                        <About />
                    </div>
                </div>
            </div> 
        )
    }
}

export default Bio
