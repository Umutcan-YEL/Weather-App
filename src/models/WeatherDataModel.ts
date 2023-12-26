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
  feelsLike: number;
  list: object;
}

export interface WeeklyGraphProps {
  list: any[];
}

export interface GraphProps {
  temperature: number[];
  time: string[];
}

export interface MainProps {
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
  feelsLike: number;
}
export interface TodayHighlightsProps {
  humidity: number;
  wind: number;
  pressure: number;
  feelsLike: number;
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
