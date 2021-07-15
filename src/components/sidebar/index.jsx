import React, { Component } from 'react';

import "./style.css";

class Sidebar extends Component {
    render(){
        return (
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                        <img src={`${process.env.PUBLIC_URL}/img/myImg1.jpeg`} alt="" className="img-fluid rounded-circle"/>
                        <h1 className="text-light"><a href="/">Soumyadeep Paul</a></h1>
                        <div className="social-links mt-3 text-center">
                            <a href="https://www.facebook.com/soumyadeep.paul.35" target="_blank"  rel="noreferrer" className="facebook facebook-background"><i className="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/__soumyadeeppaul__/" target="_blank"  rel="noreferrer" className="instagram insta-background"><i className="fa fa-instagram"></i></a>
                            <a href="https://github.com/Soumya54321" className="github github-background"  rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/soumyadeep-paul-b8516b191/"  rel="noreferrer" className="linkedin linkedin-background" target="_blank"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>

                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <li><a href="myhome" className="nav-link scrollto active"><i className="fa fa-home" aria-hidden="true"></i> <span>Home</span></a></li>
                            <li><a href="about" className="nav-link scrollto"><i className="fa fa-user-circle" aria-hidden="true"></i> <span>About</span></a></li>
                            <li><a href="skills" className="nav-link scrollto"><i className="fa fa-tags" aria-hidden="true"></i> <span>Skills</span></a></li>
                            <li><a href="resume" className="nav-link scrollto"><i className="fa fa-file-pdf-o" aria-hidden="true"></i> <span>Resume</span></a></li>
                            <li><a href="portfolio" className="nav-link scrollto"><i className="fa fa-folder-open-o" aria-hidden="true"></i> <span>Portfolio</span></a></li>
                            <li><a href="services" className="nav-link scrollto"><i className="fa fa-code" aria-hidden="true"></i> <span>Projects</span></a></li>
                            <li><a href="contact" className="nav-link scrollto"><i className="fa fa-address-card-o" aria-hidden="true"></i> <span>Contact</span></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Sidebar;