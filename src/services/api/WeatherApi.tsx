import axios from "axios";

const apiKey = "26734d91689e63eddadc907138c95e6d";

async function getWeatherData() {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts: ", error);
  }
}

export default getWeatherData;
