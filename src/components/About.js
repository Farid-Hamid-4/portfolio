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
                <p style={{ width: "80%" }}>Hey there! &#128075; I'm Farid Hamid, a recent graduate &#127891; from the University of Guelph with an Honours degree in Computer Science.<br/><br/>In my free time, you'll find me listening to &#127911; music and diving into &#127918; video games.<br/><br/>In fact, I've whipped up a web app using Spotify's API. It crafts personalized playlists based on the audio vibes of specific songs. After all, what better way to get to know someone than through their music taste? I've got a few playlists down below that reflect the musical landscape I listen to - take a peek and get to know me!</p>
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