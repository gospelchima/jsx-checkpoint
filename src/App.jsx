import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Name from "./components/Name";
import Description from "./components/Description";
import Image from "./components/Image";
import Price from "./components/Price";
import Greetings from "./components/Greetings";
function App() {
  const name= "nana"
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Price />

          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      <Greetings Name={name} />
    </div>
  );
}

export default App;
