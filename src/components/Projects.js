import "devicon/devicon.min.css";

// Import from libraries
import { Button } from "react-bootstrap";

// Data files
import projectsList from "../data/projectsData.js";

// Styling
import "../App.css";
import "./Projects.css";

export default function Projects() {
    return (
        <section id="projects-section">
            <h1 className="low-highlight">Personal Projects</h1>
            <div className="projects-container">
                {projectsList.map((project, index) => (
                    <div className="single-project">
                        <h2>{project.type}</h2>
                        <h1>{project.name}</h1>
                        <div className="skills-used">
                            {Object.entries(project.technologies).map(([techKey, techValue]) => 
                                <p>{techValue}</p>
                            )}
                        </div>
                        <div className="project-links">
                            <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                                <i className="devicon-github-plain"></i>
                                View Repo
                            </Button>
                            {project.URL && <a className="link-to-site" href={project.URL} target="_blank" rel="noopener noreferrer">Live Site</a>}
                        </div>
                        <p style={{ margin: "0", color: "#696969" }}>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}