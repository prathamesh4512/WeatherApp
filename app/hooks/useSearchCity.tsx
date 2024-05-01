import axios from "axios";
import { useCallback, useState } from "react";
import debounce from "lodash/debounce";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

// type Props = {
//     setCurrentCity:Function;
// }

const useSearchCity = () => {
  const [cities, setCities] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loadingCity,setLoadingCity] = useState(true);

  const searchCities = useCallback(debounce(async (value: string) => {
    if (value.length >= 3) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${API_KEY}`
        );
        const cities = response?.data?.list?.map((item: any) => item?.name);
        setCities(cities);
        setError("");
        setShowSuggestions(true);
      } catch (e) {
        setError("Error")
        setCities([]);
        setShowSuggestions(false);
      }
    } else {
      setCities([]);
      setShowSuggestions(false);
    }
  },300),[])


  const  handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) =>{
    setLoadingCity(true);
    e.preventDefault();
    if (cities?.length == 0) {
      setError("Location not found");
      setLoadingCity(false);
    } else {
      setError("");
      setTimeout(() => {
        setLoadingCity(false);
        // setCurrentCity(city);
        setShowSuggestions(false);
      }, 500);
    }
  }

  const handleCurrentLocation = (setCurrentCity:Function) =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          setLoadingCity(true);
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
          );
          setTimeout(() => {
            setLoadingCity(false);
            setCurrentCity(response.data.name);
          }, 500);
        } catch (error) {
          setLoadingCity(false);
        }
      });
    }
  }



  return { searchCities,handleSubmitSearch,loadingCity, cities ,error,showSuggestions,setShowSuggestions, handleCurrentLocation};
};

export default useSearchCity;
