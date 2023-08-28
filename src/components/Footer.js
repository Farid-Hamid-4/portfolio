// Import from library
import { Button, Form, Image } from "react-bootstrap";

// Assets
import instagram from "../assets/images/Instagram-Icon.png";
import github from "../assets/images/GitHub-Icon.png";
import linkedin from "../assets/images/LinkedIn-Icon.png";

// Styling
import "../styles/Global.css";
import "../styles/Footer.css";

export default function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-text">
                    <h1>Let's Connect!</h1>
                    <p>If you ever want to have a quick chat, just shoot me an email or get in touch with me through my instagram!</p>
                    <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={github}/></a>
                    <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={linkedin}/></a>
                    <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image className="icon-image" src={instagram}/></a>
                </div>
                <div className="footer-form">
                    <Form>
                        <Form.Group>
                            <Form.Control placeholder="name"/>
                            <Form.Control placeholder="email"/>
                            <Form.Control placeholder="message"/>
                            <Button type="submit">Send Message</Button>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </footer>
    )
}