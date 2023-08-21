import "bootstrap/dist/css/bootstrap.css";
import { Container, Image } from "react-bootstrap";
import me from "./me_cropped.png";

export default function App() {
  return (
    <Container fluid>
      <div style={{ backgroundColor: "red"}}>
        <Image src={me} style={{ width : "30em" }}/>
        <h1>Farid Hamid</h1>
      </div>
    </Container>
  );
}