// Imports from libraries
import { Image } from "react-bootstrap";
import Lottie from "lottie-react";

// Assets
import instagram from "../assets/images/Instagram-Icon.png";
import mail from "../assets/images/Email-Icon.png";
import github from "../assets/images/GitHub-Icon.png";
import linkedin from "../assets/images/LinkedIn-Icon.png";
import AstronautMusic from "../assets/AstronautMusic.json";

// Styling
import "../App.css";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <div><a className="navbar-logo" href="/">Farid Hamid</a></div>
                <ul className="navbar-links">
                    <li><a href="#about-section">about</a></li>
                    <li><a href="#skills-section">skills</a></li>
                    <li><a href="#projects-section">projects</a></li>
                    <li><a href="#footer">contact</a></li>
                </ul>
            </nav>

            <div className="header-container">
                <div className="header-text">
                    <h1>Hello! My name is Farid Hamid</h1>
                    <h2 className="low-highlight">Software Developer &#128187;</h2>
                    <div className="icons-container">
                        <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={github}/></a>
                        <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={linkedin}/></a>
                        <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={instagram}/></a>
                        <a href="mailto:faridhamid00@gmail.com" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={mail}/></a>
                    </div>
                </div>
                <Lottie className="header-lottie" loop={true} animationData={AstronautMusic}/>
            </div>
        </header>
    )
}