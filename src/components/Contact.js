import React, { Component } from 'react';
import '../stylesheets/contact.css';

export class Contact extends Component {
    render() {
        const style = {
            width: '3rem', 
            height: '3rem'
        }

        return (
            <div id="contact">
                <div className="container">
                    <div className="row flex" style={{flexDirection: 'column'}}>
                        <div className="col-xs-12"><h1>Get In Touch</h1></div>
                        <div className="row flex" style={{justifyContent: 'center', alignItems: 'center'}}>
                            <div className="row flex col-sm-4" style={{flexDirection: 'column', textAlign: 'right', alignItems: 'center'}}>
                                <div id="social"><a style={{color: 'black'}} href="https://www.linkedin.com/in/amymaraisane/">LinkedIn </a><span> * </span><a style={{color: 'black'}} href="https://github.com/amymaraisane">  Github  </a><span> * </span><a style={{color: 'black'}} href="https://medium.com/@amymaraisane" target="_blank">  Medium</a></div>
                            </div>
                            <div className="row flex col-sm-4" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <div>
                                    <img id="graffitiPic" src="/imgs/linkedIn7-19.jpeg" alt="Amy standing by graffiti wall"></img>
                                    <div><h5 style={{margin: '0 auto', textAlign: 'center'}}>Atlanta, GA</h5 ></div> 
                                </div>
                            </div>
                            <div className="row flex col-sm-4" style={{flexDirection: 'column', textAlign: 'right', alignItems: 'center'}}>
                                <div>612-234-7158</div>
                                <div>amy.maraisane@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
