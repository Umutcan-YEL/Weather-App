import { Divider } from "antd";
import { TodayWeatherProps } from "../../models/WeatherDataModel";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import { Typography } from "antd";
const { Title } = Typography;

const TodayWeather = ({
  cityName,
  countryName,
  day,
  description,
  hour,
  icon,
  temperature,
}: TodayWeatherProps) => {
  const { t } = useTranslation();

  return (
    <Container fluid className="text-white p-3 ">
      <Row>
        {" "}
        <h2> {t("Now")}</h2>
      </Row>
      <hr className="divider" />

      <Row>
        <Col style={{ margin: "auto" }}>
          <h1> {temperature} °C</h1>{" "}
        </Col>
        <Col>
          <img src={icon} className="picture-center" alt="icon" />
        </Col>
      </Row>
      <Row>
        <h5>{description}</h5>
      </Row>
      <hr className="divider" />

      <Row>
        <Col>
          <h5>{day + hour}</h5> <br />
          <h5>
            {cityName} ,{countryName}
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default TodayWeather;
