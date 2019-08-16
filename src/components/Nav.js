import React, { Component } from 'react';
import '../stylesheets/nav.css';

class Nav extends Component {

    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a id="name" className="navbar-brand" href="#">Amy Maraisane</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#project-list">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default Nav

//because this.state.color is already inside double braces it does not need add'l
//setState is asynchronous, callback code triggers/runs render method and updates DOM!