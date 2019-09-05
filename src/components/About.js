import React, { Component } from 'react'
import '../stylesheets/about.css'

export class About extends Component {
    render() {
        return (
            <div className="container">
                 <div className="about">
                    <div className= "row flex">
                        <h3>About</h3>
                        <p>
                            After starting my career in employee training and development at a staffing company, 
                            I soon realized it was time for me to level up and pursue my interest in web development. Rather than enrolling
                            in a bootcamp, I decided to design my own. 600 hours of Udemy courses, pair programming, podcasts, and 
                            community-based learning later, I know I can learn anything. Let's talk about how I can help you build your dream.
                        </p>
                        <h4>Ready to Build Your Dream?<a href="#contact"><button type="button" className="btn btn-lg btn-info">Contact</button></a></h4>
                    </div> 
                </div>
            </div>
        )
    }
}

export default About
