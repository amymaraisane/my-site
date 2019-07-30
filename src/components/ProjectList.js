import React, { Component } from 'react';
import Project from './Project';
import '../stylesheets/projectList.css';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    static defaultProps = {
        projects: [{
            about: ["Uses Node.js, Express, and MongoDB", "97 Lighthouse Performance Rating"],
            title: "Music Forum",
            img: "/imgs/forum-landingpage.png",
            alt: "Music Forum Landing Page showing record player"
            
        }, 
        {
            about: ["Node.js, Express, and MongoDB", "Custom JSON API and RESTful routing"],
            title: "Netflix Watchlist",
            img: "/imgs/netflix-watchlist.png",
            alt: "Red Netflix Watchlist logo", 
        }]
    }
    static propTypes = {
        projects: PropTypes.arrayOf(PropTypes.object)
    }
 
    static propTypes = {
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
        // about: PropTypes.arrayOf(PropTypes.string).isRequired
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