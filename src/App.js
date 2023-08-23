import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";
import { Image } from "react-bootstrap";
import Icon from "./components/Icon";
import Project from "./components/Project";
import me from "./assets/images/me_cropped.png";
import vibefy from "./assets/images/vibefy.png";
import uogCourseMapping from "./assets/images/uog-course-mapping.png";
import imageProcessor from "./assets/images/image-processor.png";
import "./styles/App.css";

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
    };

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
                        <Icon key={iconKey} iconKey={iconKey} iconValue={iconValue}/>
                    ))}
                </div>
            </div>

            <div className="projects">
                <h1 style={{ textAlign: "center" }}>PROJECTS</h1>
                <Project 
                    type="FULL-STACK WEB APPLICATION" 
                    name="Vibefy" 
                    technologies={{
                        "javascript-plain": "JavaScript", 
                        "react-original": "React", 
                        "nodejs-plain": "Node.js",
                        "amazonwebservices-original": "AWS", 
                        "bootstrap-plain": "Bootstrap",
                        "html5-plain": "HTML5", 
                        "css3-plain": "CSS3",
                    }}
                    github="https://github.com/Farid-Hamid-4/vibefy"
                    URL="https://main.d2xqpnct98klit.amplifyapp.com/"
                    description="Vibefy is a React-based web application that allows users to discover and explore music tracks, albums, and artists using the Spotify Web API. Users can search for songs or artists, and generate playlists containing similar tracks."
                    image={vibefy}
                />

                <Project
                    type="FULL-STACK WEB APPLICATION" 
                    name="UoG Course Mapping" 
                    technologies={{
                        "python-plain": "Python",
                        "javascript-plain": "JavaScript", 
                        "react-original": "React", 
                        "nodejs-plain": "Node.js",
                        "flask-original": "Flask",
                        "nginx-original": "Nginx",
                        "bootstrap-plain": "Bootstrap", 
                        "html5-plain": "HTML5", 
                        "css3-plain": "CSS3",
                    }}
                    github="https://github.com/Farid-Hamid-4/uog-course-mapping"
                    URL=""
                    description="A program to search and filter course offerings at the University of Guelph. Graphs majors and programs for University of Guelph, and subjects for McGill."
                    image={uogCourseMapping}
                />

                <Project
                    type="BACKEND PROJECT" 
                    name="Image Processor" 
                    technologies={{
                        "python-plain": "Python",
                        "docker-plain": "Docker",
                    }}
                    github="https://github.com/Farid-Hamid-4/image-processor"
                    URL=""
                    description="This Python project provides functionalities to sharpen or apply noise removal to an image. It utilizes the Nvidia Warp library for efficient parallel computation."
                    image={imageProcessor}
                />
            </div>

            <div className="footer">
                <h1>FOOTER</h1>
            </div>
        </>
    );
}