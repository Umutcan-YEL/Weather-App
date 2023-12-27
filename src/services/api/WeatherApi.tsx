import axios from "axios";

const apiKey = "26734d91689e63eddadc907138c95e6d";

export const getWeatherData = async (sendingData: any) => {
  try {
    if (sendingData.cords === false) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${sendingData.city}&units=Metric&appid=${apiKey}&lang=en`
      );
      return response.data;
    } else {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${sendingData.lat}&lon=${sendingData.lon}&units=Metric&appid=${apiKey}&lang=en`
      );
      return response.data;
    }
  } catch (error) {
    const cityerror = true;
    return cityerror;
  }
};
