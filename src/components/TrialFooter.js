import React, { Component } from 'react';
import '../stylesheets/footer.css'
import Methods from './Methods';

export class TrialFooter extends Component {
    render() {
        const style = {
            width: '3rem', 
            height: '3rem'
        }
        return (
            <footer class="footer mt-auto py-3">
                <div class="container">
                    <span class="text-muted"> <a href="https://www.linkedin.com/in/amymaraisane/"><img style = {style} src= "imgs/linkedin.png"></img></a></span>
                    <span class="text-muted"> <a href="https://github.com/amymaraisane"><img style = {style} src= "imgs/github.png"></img></a></span>
                </div>
            </footer>
        )
    }
}

export default TrialFooter
