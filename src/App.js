import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";

// Components
import Header from "./components/Header.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

// Styles
import "./App.css";

export default function App() {
    return (
        <>
            <Header/>

            <About />
            
            <Skills />
            
            <Projects />

            <footer>
                <h1>footer</h1>
            </footer>
        </>
    );
}