import { Row, Col, Container } from "react-bootstrap";
import TodayWeather from "../components/layout/TodayWeather";
import TodayHighlights from "../components/layout/TodayHighlights";
import { Props } from "../models/WeatherDataModel";

const Main = ({
  cityName,
  countryName,
  day,
  description,
  hour,
  humidity,
  icon,
  pressure,
  temperature,
  wind,
}: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} xs={11} className="weather-box">
          <TodayWeather
            cityName={cityName}
            countryName={countryName}
            day={day}
            description={description}
            hour={hour}
            icon={icon}
            temperature={temperature}
          />
        </Col>
        <Col>
          <TodayHighlights />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
