// Imports from libraries
import { Image } from "react-bootstrap";
import Lottie from "lottie-react";

// Assets
import instagram from "../assets/images/Instagram-Icon.png";
import mail from "../assets/images/Email-Icon.png";
import github from "../assets/images/GitHub-Icon.png";
import linkedin from "../assets/images/LinkedIn-Icon.png";
import AstronautMusic from "../assets/animations/AstronautMusic.json";

// Styling
import "../styles/Global.css";
import "../styles/Header.css";

export default function Header() {
    return (
        <header>
            <nav>
                <a id="navbar-logo" href="/">Farid Hamid</a>
                <ul id="navbar-links">
                    <li><a href="#about-section">about</a></li>
                    <li><a href="#skills-section">skills</a></li>
                    <li><a href="#projects-section">projects</a></li>
                    <li><a href="#footer">contact</a></li>
                </ul>
            </nav>

            <div id="header-container">
                <div id="header-text">
                    <h1>Hello! My name is Farid Hamid</h1>
                    <h2>Software Developer &#128187;</h2>
                    <div id="header-icons">
                        <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image src={github}/></a>
                        <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image src={linkedin}/></a>
                        <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image src={instagram}/></a>
                        <a href="mailto:faridhamid00@gmail.com" target="_blank" rel="noopener noreferrer"><Image src={mail}/></a>
                    </div>
                </div>
                <Lottie id="header-lottie" loop={true} animationData={AstronautMusic}/>
            </div>
        </header>
    )
}