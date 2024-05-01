import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { WeatherTypes,cityDataType } from "../types/WeatherTypes";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherTypes[]>();

  const [loading, setLoading] = useState(true);

  const [cityData, setCityData] = useState<cityDataType>({ sunset: 0, sunrise: 0 ,cityImage:''});
  const getWeather = async (type: string, city: string) => {
    setLoading(true);
    try {
      const res: {
        data: {
          list: WeatherTypes[];
          city: {
            sunset: number;
            sunrise: number;
          };
        };
      } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&cnt=56`
      );
      if (type === "day") setWeatherData(res?.data?.list);
      else if (type === "week") {
        let uniqueDates: number[] = [];
        const temp: WeatherTypes[] = [];
        res?.data?.list?.forEach((ele: WeatherTypes) => {
          if (!uniqueDates.includes(dayjs(ele?.dt_txt).date())) {
            temp.push(ele);
            uniqueDates.push(dayjs(ele?.dt_txt).date());
          }
        });
        setWeatherData(temp);
      }
      const res2 : {data:{
        results:{urls:{
          regular:string
        }}[]
      }} = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=BfAmDxiHywxeB2uZ4qUqbdwZSfz2Qslc5rDc9a23sq0&per_page=1&query=${city}`
      );
      if (res2?.data?.results) {
        setCityData({
          ...res?.data?.city,
          cityImage:res2?.data?.results?.[0]?.urls?.regular,
        });
      } else {
        setCityData(res?.data?.city);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return { getWeather, weatherData, cityData, loading };
};

export default useWeather;
