import "devicon/devicon.min.css";

// Import from libraries
import { Button } from "react-bootstrap";

// Data files
import projectsList from "../data/projectsData.js";

// Styling
import "../styles/Global.css";
import "../styles/Projects.css";

export default function Projects() {
    return (
        <section id="projects-section">
            <div id="projects-container" className="section-margins">
                <h1 className="section-title">Personal Projects</h1>
                {projectsList.map((project, index) => (
                    <div className="single-project">
                        <h2>{project.type}</h2>
                        <h1>{project.name}</h1>
                        <div className="skills-used">
                            {Object.entries(project.technologies).map(([techKey, techValue]) => <p>{techValue}</p>
                            )}
                        </div>
                        <div className="project-links">
                            <Button variant="outline-dark" href={project.github} target="_blank" rel="noopener noreferrer">
                                <i className="devicon-github-plain"></i>
                                View Repo
                            </Button>
                            {project.URL && <a id="link-to-site" href={project.URL} target="_blank" rel="noopener noreferrer">Live Site</a>}
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}