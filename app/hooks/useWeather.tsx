import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { WeatherTypes } from "../types/WeatherTypes";


const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherTypes[]>();

  const [loading,setLoading] = useState(true)

  const [cityData,setCityData] =  useState<{
    sunset:number;
    sunrise:number
  }>({sunset:0,sunrise:0})
  const getWeather = async (type: string,city:string) => {
    setLoading(true)
    try {
      const res :{ data:{
        list:WeatherTypes[],
        city:{
          sunset:number;
    sunrise:number;
        }
      }} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY
        }&cnt=56`
      );
      if (type === "day") setWeatherData(res?.data?.list);
      else if (type === "week") {
        let uniqueDates :number[] = [];
        const temp :WeatherTypes[] = [];
        (res?.data?.list?.forEach((ele:WeatherTypes) =>{
            if(!uniqueDates.includes(dayjs(ele?.dt_txt).date())){
                temp.push(ele);
                uniqueDates.push(dayjs(ele?.dt_txt).date())
            }
        }))
        setWeatherData(temp)
      }
      setCityData(res?.data?.city)
    } catch (e) {
      console.log(e);
    }
    setLoading(false)
  };

  return { getWeather, weatherData,cityData,loading };
};

export default useWeather;
