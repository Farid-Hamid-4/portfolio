import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Image } from "react-bootstrap";
import "devicon/devicon.min.css";
import me from "./me_cropped.png";
import "./App.css";


export default function App() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <>
            <div className="introduction">
                <Image className="profile-picture" src={me}/>
                <h1>Hi! My name is Farid Hamid <br/><span className="low-highlight">Software Developer</span></h1>
            </div>

            <div className="background">
                <h1>BACKGROUND</h1>
                <p>I recently graduated from the University of Guelph with a Bachelors of Computing in Computer Science
                    <br/><br/>As a software developer, I enjoy bridging the gap between developing and design -- combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
                    <br/><br/>When I'm not in front of a computer screen. I'm probably reading books, travelling or playing video games.
                </p>
            </div>
            
            <div className="skills">
                <h1>SKILLS</h1>
                <div className="icons">
                    <i className={`devicon-c-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-python-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-java-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-javascript-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-postgresql-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-html5-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-css3-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-nodejs-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-express-original ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-react-original ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-flask-original ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-mongodb-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-firebase-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-bootstrap-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-pandas-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-numpy-original ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-git-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-docker-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-kubernetes-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-amazonwebservices-original ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-azure-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
                    <i className={`devicon-googlecloud-plain ${isHovered ? 'colored' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></i>
          
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