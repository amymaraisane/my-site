import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

    render() {
        return (
            <header>
                <h2>AM</h2>
                <nav>
                    <li ><a href="#" className="selected">About</a></li>
                    <li><a href="#project-list">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </nav>
            </header>
        )
    }
}

export default Nav

