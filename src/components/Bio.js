import React, { Component } from 'react';
import '../stylesheets/bio.css';
import FadeIn from './FadeIn';

export class Bio extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div className="row no-gutters">
                            <div className="col-sm-3" id="img1"><FadeIn alt="galaxy" src="/imgs/galaxy.jpeg" /></div>
                            <div className="col-sm-3" id="img2"><img alt="kayak" src="/imgs/kayak.jpeg"></img></div>
                            <div className="col-sm-3" id="img3"><img alt="coffee" src="/imgs/coffee.jpeg"></img></div>
                            <div className="col-sm-3" id="img4"><img alt="presentation" src="/imgs/presentation.jpeg"></img></div>                            
                            <div className="col-sm-3" id="img5"><img alt="office" src="/imgs/office.jpeg"></img></div>
                            <div className="col-sm-3" id="img6"><img alt="graffiti" src="/imgs/graffiti.jpeg"></img></div>
                            <div className="col-sm-3" id="img7"><img alt="techy" src="/imgs/techy.jpeg"></img></div>
                            <div className="col-sm-3" id="img8"><img alt="trees" src="/imgs/trees.jpeg"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio
