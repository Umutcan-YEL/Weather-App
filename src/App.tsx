import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Header from "./views/Header";
import Main from "./views/Main";
import getWeatherData from "./services/api/WeatherApi";
import { Props } from "./models/WeatherDataModel";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { Row, Col, Container } from "react-bootstrap";
import WeeklyGraph from "./components/layout/WeeklyGraph";

function App() {
  const { t } = useTranslation();

  const { data: WeatherData, isLoading } = useQuery({
    queryFn: () => getWeatherData(),
    queryKey: ["weatherData"],
  });

  if (isLoading) {
    return <div>... Loading</div>;
  }

  const data: Props = {
    temperature: Math.round(WeatherData.list[0].main.temp),
    description: t(WeatherData.list[0].weather[0].description),
    icon: `https://openweathermap.org/img/wn/${WeatherData.list[0].weather[0].icon}@2x.png`,
    day: t(moment(WeatherData.list[0].dt_txt.slice(0, 10)).format("dddd")),
    hour: WeatherData.list[0].dt_txt.slice(10, 16),
    wind: Math.round(WeatherData.list[0].wind.speed),
    humidity: WeatherData.list[0].main.humidity,
    pressure: WeatherData.list[0].main.pressure,
    cityName: WeatherData.city.name,
    countryName: WeatherData.city.country,
    feelsLike: Math.round(WeatherData.list[0].main.feels_like),
    list: WeatherData.list,
  };

  return (
    <Container fluid className="m-2">
      <Row>
        {" "}
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Main
            cityName={data.cityName}
            countryName={data.countryName}
            day={data.day}
            description={data.description}
            hour={data.hour}
            humidity={data.humidity}
            icon={data.icon}
            pressure={data.pressure}
            temperature={data.temperature}
            wind={data.wind}
            feelsLike={data.feelsLike}
          />
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <WeeklyGraph list={[data.list]} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
