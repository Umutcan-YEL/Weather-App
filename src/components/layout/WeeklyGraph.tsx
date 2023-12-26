import Graph from "../ui/Graph";
import { WeeklyGraphProps } from "../../models/WeatherDataModel";
import { Row, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { t } from "i18next";
import moment from "moment";

const WeeklyGraph = ({ list }: WeeklyGraphProps) => {
  const weatherData = list[0].map((item: any) => {
    return item;
  });

  const MondayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Monday")
  );
  const TuesdayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Tuesday")
  );
  const WednesdayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Wednesday")
  );
  const ThursdayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Thursday")
  );
  const FridayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Friday")
  );
  const SaturdayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Saturday")
  );
  const SundayData = weatherData.filter(
    (item: any) =>
      t(moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Sunday")
  );

  const Monday: any = [
    {
      temp: MondayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: MondayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Tuesday: any = [
    {
      temp: TuesdayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: TuesdayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Wednesday: any = [
    {
      temp: WednesdayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: WednesdayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Thursday: any = [
    {
      temp: ThursdayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: ThursdayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Friday: any = [
    {
      temp: FridayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: FridayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Saturday: any = [
    {
      temp: SaturdayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: SaturdayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Sunday: any = [
    {
      temp: SundayData.map((item: any) => {
        return Math.round(item.main.temp);
      }),
      time: SundayData.map((item: any) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];

  const today = new Date();
  const day = today.getDay();

  return (
    <Container fluid className="weather-box">
      <Row>
        <Tabs
          defaultActiveKey={day}
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab
            eventKey={1}
            title={t("Monday")}
            disabled={Monday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Monday[0].temp} time={Monday[0].time} />
          </Tab>
          <Tab
            eventKey={2}
            title={t("Tuesday")}
            disabled={Tuesday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Tuesday[0].temp} time={Tuesday[0].time} />
          </Tab>
          <Tab
            eventKey={3}
            title={t("Wednesday")}
            disabled={Wednesday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Wednesday[0].temp} time={Wednesday[0].time} />
          </Tab>
          <Tab
            eventKey={4}
            title={t("Thursday")}
            disabled={Thursday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Thursday[0].temp} time={Thursday[0].time} />
          </Tab>
          <Tab
            eventKey={5}
            title={t("Friday")}
            disabled={Friday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Friday[0].temp} time={Friday[0].time} />
          </Tab>{" "}
          <Tab
            eventKey={6}
            title={t("Saturday")}
            disabled={Saturday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Saturday[0].temp} time={Saturday[0].time} />
          </Tab>{" "}
          <Tab
            eventKey={7}
            title={t("Sunday")}
            disabled={Sunday[0].temp.length > 1 ? false : true}
          >
            <Graph temperature={Sunday[0].temp} time={Sunday[0].time} />
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default WeeklyGraph;
