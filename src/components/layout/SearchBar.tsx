import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import cityData from "../../assets/cities/tr.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../../services/redux/WeatherDataSlice";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const dispacth = useDispatch();

  const handleSearch = (value?: any, event?: any) => {
    if (value === undefined) {
      setSearchQuery(event);
    } else {
      setSearchQuery(value);
    }
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      const sendingData = {
        cords: false,
        city: searchQuery,
      };

      dispacth(fetchWeatherData(sendingData));
    }
  };
  const lastData = [
    cityData.map((data) => {
      return data.label;
    }),
  ];

  const newData: any = lastData[0].filter((value, index) => {
    return lastData[0].indexOf(value) === index;
  });

  const options = newData.map((data: any) => {
    return data;
  });

  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      onChange={(event, newValue) => handleSearch(newValue)}
      options={options}
      renderInput={(params) => (
        <TextField
          variant="filled"
          className="searchbar"
          {...params}
          label={t("City")}
          onKeyDown={handleEnter}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default SearchBar;
