"use client";
import React, { useState, useEffect } from "react";
import useWeather from "../hooks/useWeather";
import {
  convertKelvinToCelsius,
  convertKelvinToFahrenheit,
} from "../utils/helper";
import LeftSideBar from "../components/LeftSideBar";
import Navbar from "../components/Navbar";
import TempCardList from "../components/TempCardList";
import HightLights from "../components/HightLights";


const Home = () => {
  const [day, setDay] = useState<string>("day"); //week
  const [tempType, setTempType] = useState<string>("celsius"); //fahrenheit
  const [currentCity, setCurrentCity] = useState<string>("Pune");

  const { getWeather, weatherData, cityData, loading } = useWeather();

  const convertTemp =
    tempType === "celsius" ? convertKelvinToCelsius : convertKelvinToFahrenheit;

  useEffect(() => {
    getWeather(day, currentCity);
  }, [day, currentCity]);

  return (
    <div className="bg-gray-300 p-10 ">
      <div className="rounded-3xl overflow-hidden flex">
        <LeftSideBar
          TodayWeather={weatherData?.[0]}
          tempType={tempType}
          convertTemp={convertTemp}
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
          cityData={cityData}
        />
        <div className="bg-gray-100 p-8 flex flex-col gap-16">
          <Navbar
            day={day}
            setDay={setDay}
            tempType={tempType}
            setTempType={setTempType}
          />
          <TempCardList
          weatherData={weatherData}
          loading={loading}
          convertTemp={convertTemp}
          day={day}
          />
      <HightLights
        TodayWeather={weatherData?.[0]}
        loading={loading}
        cityData={cityData}
      />
        </div>
      </div>
    </div>
  );
};

export default Home;
