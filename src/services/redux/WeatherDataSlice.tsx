import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherData } from "../api/WeatherApi";

export const fetchWeatherData: any = createAsyncThunk(
  "getWeatherData",
  async (sendingData) => {
    return await getWeatherData(sendingData);
  }
);

const WeatherDataSlice = createSlice({
  name: "WeatherData",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(fetchWeatherData.fulfilled, (state: any, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchWeatherData.rejected, (state: any) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

export default WeatherDataSlice.reducer;
