import { Button, Container, Image } from "react-bootstrap";
import "devicon/devicon.min.css";
import "../styles/App.css";
import "../styles/Project.css";

export default function Project({ type, name, technologies, github, URL, description, image }) {
    return (
        <Container style={{ display: "flex" }}>
            <div className="information">
                <h5>{type}</h5>
                <h1 className="low-highlight">{name}</h1>
                {Object.entries(technologies).map(([techKey, techValue]) => 
                    <Button key={techKey}>
                        <i className={`devicon-${techKey}`}></i>
                        {techValue}
                    </Button>
                )}
                <Button href={github}>
                    <i className="devicon-github-plain"></i>
                    View Repo
                </Button>
                {URL && <a href={URL}>Site</a>}
                <p>{description}</p>
            </div>
            <Image src={image} style={{ width: "500px" }}></Image>
        </Container>
    )
}