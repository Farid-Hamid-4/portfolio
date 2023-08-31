// Import from library
import { Button, Form, Image } from "react-bootstrap";
import emailjs from "@emailjs/browser";

// Assets
import instagram from "../assets/images/Instagram-Icon.png";
import github from "../assets/images/GitHub-Icon.png";
import linkedin from "../assets/images/LinkedIn-Icon.png";

// Styling
import "../styles/Global.css";
import "../styles/Footer.css";

export default function Footer() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_exbi1fc', 'template_aca5udm', e.target, 'QXw34eMQnSk1Z-UrD')
    }

    return(
        <footer>
            <div id="footer-container" className="section-margins">
                <div id="footer-text">
                    <h1 className="section-title">Let's Connect!</h1>
                    <p>If you ever want to have a quick chat, just shoot me an email or get in touch with me through my socials!</p>
                    <div id="footer-icons">
                        <a href="https://github.com/Farid-Hamid-4" target="_blank" rel="noopener noreferrer"><Image src={github}/></a>
                        <a href="https://www.linkedin.com/in/farid-hamid/" target="_blank" rel="noopener noreferrer"><Image src={linkedin}/></a>
                        <a href="https://www.instagram.com/fhamid4/" target="_blank" rel="noopener noreferrer"><Image src={instagram}/></a>
                    </div>
                </div>
                <div id="footer-form">
                    <Form onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Control name="name" type="name" placeholder="name"/>
                            <Form.Control name="email_from" type="email" placeholder="email"/>
                            <Form.Control name="message" as="textarea" rows={5} type="message" placeholder="message"/>
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">Send Message</Button>
                    </Form>
                </div>
            </div>
        </footer>
    )
}