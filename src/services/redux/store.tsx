import { configureStore } from "@reduxjs/toolkit";

import WeatherDataSlice from "./WeatherDataSlice";

export const store = configureStore({
  reducer: {
    weatherData : WeatherDataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
