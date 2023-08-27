import "devicon/devicon.min.css";

// Import from libraries
import { Button, Container } from "react-bootstrap";

// Data files
import projectsList from "../data/projectsData.js";

// Styling
import "../App.css";
import "./Projects.css";

export default function Projects() {
    return (
        <section id="projects-section">
            <div className="projects-container">
                <h1 className="low-highlight">Personal Projects</h1>
                <div>
                    {projectsList.map((project, index) => (
                        <Container fluid>
                            <div className="information">
                                <h2>{project.type}</h2>
                                <h1>{project.name}</h1>
                                {Object.entries(project.technologies).map(([techKey, techValue]) => 
                                    <Button key={techKey}>
                                        <i className={`devicon-${techKey}`}></i>
                                        {techValue}
                                    </Button>
                                )}
                                <Button href={project.github}>
                                    <i className="devicon-github-plain"></i>
                                    View Repo
                                </Button>
                                {URL && <a href={URL}>Site</a>}
                                <p>{project.description}</p>
                            </div>
                        </Container>
                    ))}
                </div>
            </div>
        </section>
    );
}