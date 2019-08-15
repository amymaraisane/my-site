import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

    render() {
        return (
            <header>
                <h2>Amy Maraisane</h2>
                <nav>
                    <li><a href="#">About</a></li>
                    <li><a href="#project-list">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </nav>
            </header>
        )
    }
}

export default Nav

//because this.state.color is already inside double braces it does not need add'l
//setState is asynchronous, callback code triggers/runs render method and updates DOM!