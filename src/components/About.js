// Import from library
import { Image } from "react-bootstrap";

// Assets
import Farid from "../assets/images/Farid.png";

// Styling
import "../styles/Global.css";
import "../styles/About.css";

export default function About() {
    return (
        <section id="about-section">
            <div id="about-container" className="section-margins">
                <div id="about-me-bio">
                    <h1 className="section-title">About Me</h1>
                    <p>Hi! &#128075; My name is Farid Hamid and I'm a new grad &#127891; from the University of Guelph with an Honours degree in Computer Science.<br/><br/>I enjoy spending my free time listening to &#127911; music around the clock and playing &#127918; video games.<br/><br/>I believe one of the best ways to learn more about someone is to dive into their music catalog. Here are some of my playlists and the type of music I listen to:</p>
                </div>
                <div id="about-me-image"><Image src={Farid}/></div>
            </div>
        </section>
    )
}