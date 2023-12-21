import { useQuery } from "@tanstack/react-query";
import getWeatherData from "./services/api/WeatherApi";

const Demo = () => {
  const { data: WeatherData, isLoading } = useQuery({
    queryFn: () => getWeatherData(),
    queryKey: ["weatherData"],
  });

  if (isLoading) {
    return <div>... Loading</div>;
  }

  return (
    <div>
      {WeatherData?.list.map((item: any) => {
        return <ul key={item.dt}> {item.dt_txt} </ul>;
      })}
    </div>
  );
};

export default Demo;
