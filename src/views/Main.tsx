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
  feelsLike,
}: Props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="weather-box m-2" md={2} xs={11}>
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

        <Col className="weather-box m-2">
          <TodayHighlights
            feelsLike={feelsLike}
            humidity={humidity}
            pressure={pressure}
            wind={wind}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
