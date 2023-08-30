import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";

// Import from library
import { useEffect } from "react";

// Components
import Header from "./components/Header.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

// Styles
import "./styles/Global.css";

export default function App() {
    useEffect(() => {
        fetch('https://main.d3nrpo7t1d7wxl.amplifyapp.com/get-access-token')
        .then(response => {
            console.log('Response status:', response.status);
            return response.json();
        })
        .then(data => {
            console.log('Client ID:', data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])

    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}