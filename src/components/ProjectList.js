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
        projects: PropTypes.arrayOf(PropTypes.objects)
    }

    render() {
        const about = ["Built with Node, Express, and MongoDB", "97% lighthouse best practices"];
        
        const projects = this.props.projects.map(p=>(
            <div className="card">
                <img src= {p.img} alt={p.alt} />
                <h2 className="name" style={{fontFamily: 'Permanent Marker'}}>{p.title}</h2>
                <ul>
                    {about.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
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
