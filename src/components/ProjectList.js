import React, { Component } from 'react';
import Project from './Project';
import '../stylesheets/projectList.css';
import PropTypes from 'prop-types';

class ProjectList extends Component {

    static here = JSON.stringify(<a href="https://medium.com/@amy.kaschke/how-i-built-my-first-api-d6e6fdc4655e" target="_blank">here</a>)

    static defaultProps = {
        projects: [{
            about: ["HTML/CSS Landing page built with Bootrap 3, updated to Bootstrap 4", "Displays modal popup window on page load"],
            title: "Lesotho Travel Site",
            img: "/imgs/lesotho-travel-site.png",
            alt: "Lesotho countryside on Lesotho travel site",
            src: "https://amymaraisane.github.io/lesotho-travel/",
            id: "lesotho"
            
        },
        {
            about: ["RGB color matching game with easy/hard modes", "My first vanilla JS project with mouse events",],
            title: "Color Craze Game",
            img: "/imgs/color-craze.png",
            alt: "Color Craze matching game site",
            src: "https://amymaraisane.github.io/RGB-guessing-game/",
            id: "color-craze"
            
        },
        {
            about: ["Node.js, Express, and MongoDB, iTunes API", "Users can login, post albums, and leave comments"],
            title: "Music Forum",
            img: "/imgs/music-forum.png",
            alt: "Music Forum Landing Page showing record player",
            src: "https://vast-sierra-13998.herokuapp.com/",
            id: "music-forum"
            
        }, 
        {
            about: ["Node.js, Express, and MongoDB", "Check out my Medium blog post on how I built the custom API"],
            title: "Netflix Watchlist",
            img: "/imgs/netflix-watchlist-full.png",
            alt: "Red Netflix Watchlist logo", 
            src: "https://pacific-oasis-25527.herokuapp.com/",
            id: "netflix-watchlist"
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
                {projects}
            </div>
        )
    }
}

export default ProjectList


//return the list of jsx elements inside of a div