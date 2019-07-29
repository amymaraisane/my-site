import React, { Component } from 'react';
import Project from './Project';
import '../stylesheets/project.css';
import PropTypes from 'prop-types'

class Description extends Component {
    static defaultProps = {
        projects: [{
            title: "Music Forum",
            img: "/imgs/forum-landingpage.png",
            alt: "Music Forum Landing Page showing record player"
        }, 
        {
            title: "Netflix Watchlist",
            img: "/imgs/forum-landingpage.png",
            alt: "Red Netflix Watchlist logo"
        }]
    }

    static propTypes = {
        projects: PropTypes.arrayOf(PropTypes.objects)
    }

    render() {
        const imgStyle = {width:'500px', height:'400px'};
        const h2Style = {color: "rgb(50, 0, 255)", fontSize: '2em', margin: '0'};
        const liStyle = {fontSize: '1em', color: 'rgb(250, 250, 250)'};
        const about = ["Built with Node, Express, and MongoDB", "97% lighthouse best practices"];
        
        const projects = this.props.projects.map(p=>(
            <div className="card">
                <h2 className="name" style={{fontFamily: 'Permanent Marker'}}>{p.title}</h2>
                <img style={imgStyle} src= {p.img} alt={p.alt} />
                <h5 style={h2Style}>About:</h5>
                <ul>
                    {about.map((item, index)=>(
                        <li key={index} style={liStyle}>{item}</li>
                    ))}
                </ul>
            </div>
        ));
        return (
            <div>
                {projects};
            </div>
        )
    }
}


export default Description


//put {this.props.projets} in curly braces if its from another page. since defined on this 
//page, dont need 
