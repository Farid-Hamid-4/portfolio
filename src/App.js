import "bootstrap/dist/css/bootstrap.css";
import "devicon/devicon.min.css";

// Import from library
import { useEffect, useState } from "react";

// Components
import Header from "./components/Header.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Footer from "./components/Footer.js";

// Styles
import "./styles/Global.css";

export default function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return (
        <>
            <div><h1>{!data ? "Loading..." : data}</h1></div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}