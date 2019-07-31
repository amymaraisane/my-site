import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "rgb(40, 100, 200)"};

        setTimeout(()=>{
            this.setState({ color: "rgb(200, 0, 50" })
        }, 3000);
    }

    render() {
        return (
            <header>
                <h2>AM</h2>
                <nav>
                    <li><a href="#" style= {{color: this.state.color}}>About</a></li>
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