export interface CityData {
  cityName: string;
  countryName: string;
}

export interface CurrentData {
  temperature: number;
  description: string;
  icon: string;
  day: string;
  hour: string;
  wind: number;
  humidity: number;
  pressure: number;
}

export interface Props {
  temperature: number;
  description: string;
  icon: string;
  day: string;
  hour: string;
  wind: number;
  humidity: number;
  pressure: number;
  cityName: string;
  countryName: string;
}

export interface TodayWeatherProps {
  temperature: number;
  description: string;
  day: string;
  hour: string;
  cityName: string;
  countryName: string;
  icon: string;
}

export interface Data {
  currentData: object;
  cityData: object;
}
