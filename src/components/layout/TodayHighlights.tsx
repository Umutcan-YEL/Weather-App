import { t } from "i18next";
import { TodayHighlightsProps } from "../../models/WeatherDataModel";
import { Row, Col, Container } from "react-bootstrap";
import { FaWind, FaTemperatureFull } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaGauge } from "react-icons/fa6";

const TodayHighlights = ({
  feelsLike,
  humidity,
  pressure,
  wind,
}: TodayHighlightsProps) => {
  return (
    <Container fluid className="text-white p-3">
      <h2> {t("Today-Highlight")} </h2>
      <br />
      <Row className="mt-5">
        <Col className="inner-box p-3">
          <h4> {t("Wind")} </h4>
          <br />
          <Row className="text-center">
            <Col md={4}>
              <h2>
                <FaWind />
              </h2>
            </Col>
            <Col>
              <h2> {wind} KM/H </h2>
            </Col>
          </Row>
        </Col>{" "}
        <Col className="inner-box p-3">
          <h4> {t("Feels-Like")} </h4>
          <br />
          <Row className="text-center">
            <Col md={4}>
              <h2>
                <FaTemperatureFull />
              </h2>
            </Col>
            <Col>
              <h2> {feelsLike} °C</h2>
            </Col>
          </Row>
        </Col>{" "}
        <Col className="inner-box p-3">
          <h4> {t("Humidity")} </h4>
          <br />
          <Row className="text-center">
            <Col md={4}>
              <h2>
                <IoIosWater />
              </h2>
            </Col>
            <Col>
              <h2> {humidity} % </h2>
            </Col>
          </Row>
        </Col>{" "}
        <Col className="inner-box p-3">
          <h4> {t("Pressure")} </h4>
          <br />
          <Row className="text-center">
            <Col md={4}>
              <h2>
                <FaGauge />
              </h2>
            </Col>
            <Col>
              <h3> {pressure} hPa </h3>
            </Col>
          </Row>
        </Col>{" "}
      </Row>
      <Row></Row>
    </Container>
  );
};

export default TodayHighlights;
