import React, { Component } from 'react';
import '../stylesheets/bio.css';
import Image from './Image';

export class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { visibility: "hidden"}

        setTimeout(()=>{
            this.setState({ visibility: "visible" })
        }, 1000);
    }
    render() {

        const style = {
            visibility: this.state.visibility
        }

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div className="row no-gutters">
                            <Image src="/imgs/lesotho-travel-site.png" id="img1" alt="Lesotho travel site" style={style} />
                            <Image src="/imgs/color-craze.png" id="img2" alt="Color Craze game site" style={style} />
                            <Image src="/imgs/music-forum.png" id="img3" alt="Music Forum site" style={style} />
                            <Image src="/imgs/netflix-watchlist-full.png" id="img4" alt="Netflix watchlist site" style={style} />
                     </div>
                        <div class="slogan">
                            <div class= "row">
                                <p style = {{ visibility: this.state.visibility}}>Build Your Dream
                                    <span> {"\n"}amy.maraisane@gmail.com</span>
                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Bio
