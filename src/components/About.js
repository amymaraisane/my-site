import React, { Component } from 'react'
import '../stylesheets/about.css'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                    <div className= "row">
                        <h3>About</h3>
                        <p>
                            After starting my career in employee training and development at a staffing company, 
                            I soon realized it was time to take my own skills to the next level. Rather than enrolling
                            in a bootcamp, I decided to teach myself. 550 hours of coding later, I am in love. There is 
                            nothing so exciting as creating something new from the ground up. 
                        </p>
                        <h4 className="text-md-right">Ready to Build Your Dream?</h4>
                </div>
            </div>
        </div>
        )
    }
}

export default About
