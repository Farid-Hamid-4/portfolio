import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";
import { Image } from "react-bootstrap";
import Icon from "./components/Icon";
import iconsList from "./data/iconsData";
import Project from "./components/Project";
import projectsList from "./data/projectsData";
import instagram from "./assets/images/instagram.png";
import mail from "./assets/images/mail.png";
import github from "./assets/images/github.png";
import linkedin from "./assets/images/linkedin.png";
import "./App.css";

export default function App() {
    return (
        <>
            <header>
                <nav>
                    <div className="navbar-logo"><a href="/">Farid Hamid</a></div>
                    <ul className="navbar-links">
                        <li><a href="#background-section">about</a></li>
                        <li><a href="#skills-section">skills</a></li>
                        <li><a href="#projects-section">projects</a></li>
                        <li><a href="#footer">contact</a></li>
                    </ul>
                </nav>

                <div className="header-main-content">
                    <h1>Hi! My name is Farid Hamid <br/><span className="low-highlight">Software Developer</span></h1>
                    <div className="icon-component">
                        <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={github}/></a>
                        <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={linkedin}/></a>
                        <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={instagram}/></a>
                        <a href="faridhamid00@gmail.com" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={mail}/></a>
                    </div>
                </div>
            </header>

            <section id="background-section">
                <div className="background-component">
                    <div>
                        <h1>BACKGROUND</h1>
                    </div>
                    <div>
                        <p> I recently graduated from the University of Guelph with an honors degree in Computer Science
                            <br/><br/>
                            As a software developer, I enjoy bridging the gap between developing and design -- combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
                            <br/><br/>
                            When I'm not in front of a computer screen. I'm probably reading books, travelling or playing video games.
                        </p>
                    </div>
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