import Language from "../components/layout/Language";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "../components/layout/SearchBar";

function Header() {
  return (
    <Container fluid>
      <Row>
        <Col>abc </Col>
        <Col>
          <SearchBar />
        </Col>
        <Col style={{ float: "right" }}>
          <Language />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
