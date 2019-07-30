import React, { Component } from 'react';
import Project from './Project';
import '../stylesheets/projectList.css';
import PropTypes from 'prop-types';

class ProjectList extends Component {
    static defaultProps = {
        projects: [{
            title: "Music Forum",
            img: "/imgs/forum-landingpage.png",
            alt: "Music Forum Landing Page showing record player"
        }, 
        {
            title: "Netflix Watchlist",
            img: "/imgs/netflix-watchlist.png",
            alt: "Red Netflix Watchlist logo"
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
        const about = ["Built with Node, Express, and MongoDB", "97% lighthouse best practices"];
        
        const projects = this.props.projects.map(p=>(
          < Project {...p} about = {about} />
        ));
        return (
            <div className="project-list">
                {projects};
            </div>
        )
    }
}

export default ProjectList


//put {this.props.projets} in curly braces if its from another page. since defined on this page, dont need 

//return the list of jsx elements inside of a div