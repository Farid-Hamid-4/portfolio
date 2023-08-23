import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";
import { Image } from "react-bootstrap";
import Icon from "./Icon";
import me from "./me_cropped.png";
import "./App.css";

export default function App() {
    const iconsList = {
        "c-plain": "C", 
        "python-plain": "Python", 
        "java-plain": "Java", 
        "javascript-plain": "JavaScript", 
        "postgresql-plain": "PostgreSQL", 
        "html5-plain": "HTML5", 
        "css3-plain": "CSS3", 
        "nodejs-plain": "Node.js", 
        "express-original": "Express", 
        "react-original": "React", 
        "flask-original": "Flask", 
        "firebase-plain": "Firebase", 
        "bootstrap-plain": "Bootstrap", 
        "pandas-plain": "pandas", 
        "numpy-original": "NumPy", 
        "git-plain": "Git", 
        "docker-plain": "Docker",
        "amazonwebservices-original": "AWS", 
        "azure-plain": "Azure", 
        "googlecloud-plain": "Google Cloud"
    }

    return (
        <>
            <div className="introduction">
                <Image className="profile-picture" src={me}/>
                <h1>Hi! My name is Farid Hamid <br/><span className="low-highlight">Software Developer</span></h1>
            </div>

            <div className="background">
                <h1>BACKGROUND</h1>
                <p> I recently graduated from the University of Guelph with an honors degree in Computer Science
                    <br/><br/>
                    As a software developer, I enjoy bridging the gap between developing and design -- combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
                    <br/><br/>
                    When I'm not in front of a computer screen. I'm probably reading books, travelling or playing video games.
                </p>
            </div>
            
            <div className="skills">
                <h1>SKILLS</h1>
                <div className="icons">
                    {Object.entries(iconsList).map(([iconKey, iconValue]) => (
                        <Icon key={iconKey} iconKey={iconKey} iconValue={iconValue} />
                    ))}
                </div>
            </div>

            <div className="projects">
                <h1>PROJECTS</h1>
            </div>

            <div className="footer">
                <h1>FOOTER</h1>
            </div>
        </>
    );
}