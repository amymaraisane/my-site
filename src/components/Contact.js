import React, { Component } from 'react';
import '../stylesheets/contact.css'
import Methods from './Methods';

export class Contact extends Component {
    render() {
        return (
            <footer class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted"> <a href="https://www.linkedin.com/in/amymaraisane/"><img style = {{width: '3rem', height: '3rem'}} src= "imgs/linkedin.png"></img></a></span>
                    <span class="text-muted"> <a href="https://github.com/amymaraisane"><img style = {{width: '3rem', height: '3rem'}} src= "imgs/github.png"></img></a></span>
                </div>
            </footer>
        )
    }
}

export default Contact
