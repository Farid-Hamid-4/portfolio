// Import from library
import { Image } from "react-bootstrap";

// Assets
import Farid from "../assets/images/Farid.png";

// Styling
import "../styles/Global.css";
import "../styles/About.css";

export default function About() {
    return (
        <section id="about-section" className="section-margins">
            <h1 className="section-title">About Me</h1>
            <div id="about-container">
                <p>Hi! &#128075; My name is Farid Hamid and I'm a new grad &#127891; from the University of Guelph with an Honours degree in Computer Science.<br/><br/>I enjoy spending my free time listening to &#127911; music and playing &#127918; video games.<br/><br/>I believe one of the best ways to learn more about someone is to dive into their music catalog. Here are some of my playlists and the type of music I listen to</p>
                <div id="about-me-image"><Image alt="A picture of Farid Hamid" src={Farid}/></div>
            </div>
            <div id="playlists-container">
                <iframe title="k-pop playlist by Farid Hamid" style={{borderRadius: "12px", width:"32%", height:"152px", frameBorder: "0", marginRight: "8px" }} src="https://open.spotify.com/embed/playlist/2dCHx8JMQVnWJhRGu8idi9?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                
                <iframe title="classics playlist by Farid Hamid" style={{ borderRadius: "12px", width:"32%", height:"152px", frameBorder: "0", marginRight: "8px" }} src="https://open.spotify.com/embed/playlist/52VvgAKPbKpUogNeEriqTV?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                <iframe title="chill playlist by Farid Hamid" style={{borderRadius: "12px", width:"32%", height:"152px", frameBorder: "0"}} src="https://open.spotify.com/embed/playlist/3SOk5NdKaAYsPHcoUIZ9eQ?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </section>
    )
}