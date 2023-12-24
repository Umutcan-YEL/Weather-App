import Language from "../components/layout/Language";
import { Row, Col, Container } from "react-bootstrap";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>abc </Col>
        <Col>abc</Col>
        <Col style={{float:"right"}}>
          <Language />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
