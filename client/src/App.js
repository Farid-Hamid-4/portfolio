import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";
// import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Icon from "./components/Icon";
import iconsList from "./data/iconsData";
import Project from "./components/Project";
import projectsList from "./data/projectsData";
import instagram from "./assets/images/Instagram-Icon.png";
import mail from "./assets/images/Email-Icon.png";
import github from "./assets/images/GitHub-Icon.png";
import linkedin from "./assets/images/LinkedIn-Icon.png";
import Farid from "./assets/images/Farid.png";
import AstronautMusic from "./assets/AstronautMusic.json";
import Lottie from "lottie-react";
import "./App.css";

export default function App() {
    
    return (
        <>
            <header>
                <nav>
                    <div className="navbar-logo"><a href="/">Farid Hamid</a></div>
                    <ul className="navbar-links">
                        <li><a href="#about-section">about</a></li>
                        <li><a href="#skills-section">skills</a></li>
                        <li><a href="#projects-section">projects</a></li>
                        <li><a href="#footer">contact</a></li>
                    </ul>
                </nav>

                <div className="header-container">
                    <div className="header-text">
                        <h1>Hello! My name is Farid Hamid <br/><span className="low-highlight">Software Developer &#128187;</span></h1>
                        <div className="icons-container">
                            <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={github}/></a>
                            <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={linkedin}/></a>
                            <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={instagram}/></a>
                            <a href="mailto:faridhamid00@gmail.com" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={mail}/></a>
                        </div>
                    </div>
                    <div className="header-lottie"><Lottie loop={true} animationData={AstronautMusic}/></div>
                </div>
            </header>

            <section id="about-section">
                <div className="about-component">
                    <div className="about-bio">
                        <h1>About Me</h1>
                        <p> Hi! &#128075; My name is Farid Hamid and I'm a new grad &#127891; from the University of Guelph with an Honours degree in Computer Science.
                            <br/><br/>
                            I enjoy spending my free time listening to &#127911; music around the clock and playing &#127918; video games. 
                            <br/><br/>
                            I believe one of the best ways to learn more about someone is to dive into their music catalog. Here are some of my playlists and the type of music I listen to:
                        </p>
                    </div>
                    <div className="about-image"><Image style={{ width: "15em", borderRadius: "10px" }} src={Farid}/></div>
                </div>
            </section>
            
            <section id="skills-section">
                <div className="skills">
                    <h1>SKILLS</h1>
                    <div className="icons">
                        {Object.entries(iconsList).map(([iconKey, iconValue]) => (
                            <Icon key={iconKey} iconKey={iconKey} iconValue={iconValue}/>
                            ))}
                    </div>
                </div>
            </section>

            <section id="projects-section">
                <div className="projects">
                    <h1 style={{ textAlign: "center" }}>PROJECTS</h1>
                    {projectsList.map((project, index) => (
                        <Project
                            key={index}
                            type={project.type}
                            name={project.name}
                            technologies={project.technologies}
                            github={project.github}
                            URL={project.URL}
                            description={project.description}
                            image={project.image}
                        />
                    ))}
                </div>
            </section>

            <footer id="footer">
                <h1>FOOTER</h1>
            </footer>
        </>
    );
}