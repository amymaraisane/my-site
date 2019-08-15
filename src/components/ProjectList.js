import React, { Component } from 'react';
import Project from './Project';
import '../stylesheets/projectList.css';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    static defaultProps = {
        projects: [{
            about: ["HTML/CSS Landing page built with Bootrap 3 and updated to Bootstrap 4", "Displays modal popup window on page load"],
            title: "Lesotho Travel Site",
            img: "/imgs/lesotho-travel-site.png",
            alt: "Lesotho countryside on Lesotho travel site",
            src: "https://amymaraisane.github.io/RGB-Guessing-Game/"
            
        },
        {
            about: ["My first vanilla JavaScript project", "RGB color matching game with click listeners and easy/hard modes"],
            title: "Color Craze Game",
            img: "/imgs/color-craze.png",
            alt: "Color Craze matching game site",
            src: "https://amymaraisane.github.io/RGB-Guessing-Game/"
            
        },
        {
            about: ["Uses Node.js, Express, and MongoDB", "97 Lighthouse Performance Rating"],
            title: "Music Forum",
            img: "/imgs/music-forum.png",
            alt: "Music Forum Landing Page showing record player",
            src: "https://vast-sierra-13998.herokuapp.com/"
            
        }, 
        {
            about: ["Node.js, Express, and MongoDB", "Custom JSON API and RESTful routing"],
            title: "Netflix Watchlist",
            img: "/imgs/netflix-watchlist-full.png",
            alt: "Red Netflix Watchlist logo", 
            src: "https://pacific-oasis-25527.herokuapp.com/"
        }]
    }
    static propTypes = {
        projects: PropTypes.arrayOf(PropTypes.object)
    }

    render() {
        const projects = this.props.projects.map((p, index)=>(
          < Project key={index} {...p} />
        ));
        return (
            <div id="project-list">
                {projects};
            </div>
        )
    }
}

export default ProjectList


//return the list of jsx elements inside of a div