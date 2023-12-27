import { useEffect, useState } from "react";
import "./App.css";
import Header from "./views/Header";
import Main from "./views/Main";
import { fetchWeatherData } from "./services/redux/WeatherDataSlice";
import moment from "moment";
import { Row, Col, Container } from "react-bootstrap";
import WeeklyGraph from "./components/layout/WeeklyGraph";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Error from "./views/Error";
import LocationModal from "./components/ui/LocationModal";

function App() {
  const [trigger, setTrigger] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    if (trigger === false) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sendingData = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
              city: "",
              cords: true,
            };

            dispatch(fetchWeatherData(sendingData));
            setTrigger(true);
          },
          (error) => {
            const sendingData = {
              city: "Çorum",
              cords: false,
            };
            dispatch(fetchWeatherData(sendingData));
            console.warn(error.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
          }
        );
      } else {
        const sendingData = {
          city: "Çorum",
          cords: false,
        };
        dispatch(fetchWeatherData(sendingData));
        console.warn("Geolocation is not supported by this browser.");
      }
    }
  }, []);
  const WeatherData = useSelector((state: any) => state.weatherData.data);

  if (WeatherData === true) {
    return <Error />;
  } else if (WeatherData === null) {
    return <LocationModal />;
  } else {
    return (
      <Container fluid className="m-2">
        {" "}
        <Row>
          {" "}
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main
              cityName={WeatherData.city.name}
              countryName={WeatherData.city.country}
              day={t(
                moment(WeatherData.list[0].dt_txt.slice(0, 10)).format("dddd")
              )}
              description={t(WeatherData.list[0].weather[0].description)}
              hour={WeatherData.list[0].dt_txt.slice(10, 16)}
              humidity={WeatherData.list[0].main.humidity}
              icon={`https://openweathermap.org/img/wn/${WeatherData.list[0].weather[0].icon}@2x.png`}
              pressure={WeatherData.list[0].main.pressure}
              temperature={Math.round(WeatherData.list[0].main.temp)}
              wind={Math.round(WeatherData.list[0].wind.speed)}
              feelsLike={Math.round(WeatherData.list[0].main.feels_like)}
            />
          </Col>
        </Row>
        <Row>
          {" "}
          <Col>
            <WeeklyGraph list={[WeatherData.list]} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
