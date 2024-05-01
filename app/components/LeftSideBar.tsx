import React, { useState } from "react";
import SearchBox from "./SearchBox";
import dayjs from "dayjs";
import { DAYS } from "../utils/constant";
import useSearchCity from "../hooks/useSearchCity";
import SuggestionBox from "./SuggestionBox";
import { cityDataType } from "../types/WeatherTypes";

type props = {
  TodayWeather: any;
  tempType: string;
  convertTemp: Function;
  setCurrentCity: Function;
  currentCity: string;
  cityData:cityDataType;
};

const LeftSideBar = ({
  TodayWeather,
  cityData,
  tempType,
  convertTemp,
  currentCity,
  setCurrentCity,
}: props) => {
  const [city, setCity] = useState("");
  const {
    searchCities,
    cities,
    error,
    handleSubmitSearch,
    handleCurrentLocation,
    showSuggestions,
    setShowSuggestions,
  } = useSearchCity();


  const handleInputChang = async (value: string) => {
    setCity(value);
    await searchCities(value);
  };

  function handleSuggestionClick(value: string) {
    setCity(value);
    setCurrentCity(value)
    setShowSuggestions(false);
  }
  return (
    <div className="bg-white p-8 flex flex-col gap-8">
      <div className="relative hidden md:flex">
        <SearchBox
          value={city}
          onSubmit={handleSubmitSearch}
          onChange={(e) => handleInputChang(e.target.value)}
          handleCurrentLocation={handleCurrentLocation}
          setCurrentCity={setCurrentCity}
        />
        <SuggestionBox
          {...{
            showSuggestions,
            cities,
            handleSuggestionClick,
            error,
          }}
        />
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${TodayWeather?.weather?.[0]?.icon}@4x.png`}
        alt="icon"
      />
      <h1 className="text-7xl font-light relative">
        {convertTemp(TodayWeather?.main?.temp)}
        <sup className="text-4xl absolute top-[2px]">
          &deg;{tempType === "celsius" ? "C" : "F"}
        </sup>
      </h1>
      <h4>
        {DAYS[dayjs(TodayWeather?.dt_txt).day()]},{" "}
        <span>
          {dayjs(new Date()).hour() + ":" + dayjs(new Date()).minute()}
        </span>
      </h4>
      <hr className="mt-auto"/>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <img
        src={`https://openweathermap.org/img/wn/${TodayWeather?.weather?.[0]?.icon}.png`}
        alt="icon"
      />
          <span className="text-sm">
            {TodayWeather?.weather?.[0]?.description}
          </span>
        </div>
        {TodayWeather?.rain?.["3h"] && (
          <div>
            <img src="" alt="" />
            <span className="text-sm">
              Rain - {TodayWeather?.rain?.["3h"] * 100}%
            </span>
          </div>
        )}
        <div className="h-[80px] bg-cover w- rounded-xl flex items-center justify-center text-white font-medium" style={{backgroundImage:`url(${cityData?.cityImage})`}}>
          {currentCity}
        </div>
      </div>

      <div className="relative">
        <img src="" alt="" />
        <span className="text-white absolute"> New York, Ny, USA</span>
      </div>
    </div>
  );
};

export default LeftSideBar;
