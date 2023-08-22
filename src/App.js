import "bootstrap/dist/css/bootstrap.css";
import { Container} from "react-bootstrap";
import "./App.css"

export default function App() {
    return (
        <Container fluid>
            <div id="introduction">
               <h1>Hi! My name is Farid Hamid | Software Developer</h1>
            </div>

            <div id="background">
                <h1>Background</h1>
            </div>
            
            <div id="skills">
                <h1>Skills</h1>
            </div>

            <div id="projects">
                <h1>Projects</h1>
            </div>
        </Container>
    );
}