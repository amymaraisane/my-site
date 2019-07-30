import React, { Component } from 'react';
import '../stylesheets/contact.css'
import Methods from './Methods';

export class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <h1>Get in Touch</h1>
                <Methods>
                    <p>email: amy.maraisane@gmail.com </p>
                    <div> <a target="_blank" href="https://medium.com/@amy.kaschke"></a>Medium @amy.maraisane</div>
                    <p>linkedIn</p>
                    <p>this is an example of passing children!</p>
                </Methods>
                
            </div>
        )
    }
}

export default Contact
