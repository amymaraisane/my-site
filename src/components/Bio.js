import React, { Component } from 'react';
import '../stylesheets/bio.css';

export class Bio extends Component {
    render() {

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div class="row no-gutters">
                            <div className="col-sm-3"><div className="card"><img alt="galaxy" src="/imgs/galaxy.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="kayak" src="/imgs/kayak.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="coffee" src="/imgs/coffee.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="presentation" src="/imgs/presentation.jpeg"></img></div></div>
                            
                            <div className="col-sm-3"><div className="card"><img alt="office" src="/imgs/office.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="graffiti" src="/imgs/graffiti.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="techy" src="/imgs/techy.jpeg"></img></div></div>
                            <div className="col-sm-3"><div className="card"><img alt="trees" src="/imgs/trees.jpeg"></img></div></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bio
