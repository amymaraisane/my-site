import React, { Component } from 'react';
import '../stylesheets/bio.css';

export class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = { visibility: "hidden"}

        setTimeout(()=>{
            this.setState({ visibility: "visible" })
        }, 1400);
    }

    render() {

        return (
            <div className="bio">
                <div className = "imageGrid">
                    <div className="container"> 
                        <div className="row no-gutters">
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img1" alt="galaxy" src="/imgs/galaxy.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img2" alt="kayak" src="/imgs/kayak.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img3" alt="coffee" src="/imgs/coffee.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img4" alt="presentation" src="/imgs/presentation.jpeg"></img></div>                            
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img5" alt="office" src="/imgs/office.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img6" alt="graffiti" src="/imgs/graffiti.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img7" alt="techy" src="/imgs/techy.jpeg"></img></div>
                            <div className="col-sm-3"><img style = {{ visibility: this.state.visibility}} id="img8" alt="trees" src="/imgs/trees.jpeg"></img></div>
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
