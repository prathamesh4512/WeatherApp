import { Skeleton } from 'antd'
import React from 'react'
import UvIndexCard from './UvIndexCard'
import WindStatusCard from './WindStatusCard'
import SunDetailsCard from './SunDetailsCard'
import HumidityCard from './HumidityCard'
import VisibilityCard from './VisibilityCard'
import AirQualityCard from './AirQualityCard'
import dayjs from 'dayjs'
import { WeatherTypes } from '../types/WeatherTypes'

type Props = {
    TodayWeather:WeatherTypes | undefined;
    loading:boolean;
    cityData:{
        sunset:number;
        sunrise:number
      }
}

const HightLights = ({TodayWeather,loading,cityData}: Props) => {
  return (
    <div>
    <h2 className="mb-4 font-medium">{"Today's Highlights"}</h2>
    <div className="grid grid-cols-3 gap-[12px]">
      {loading ? (
        Array(6)
          .fill(0)
          ?.map((_, idx) => (
            <Skeleton.Button
              active
              key={idx}
              style={{ height: "200px", width: "200px" }}
            />
          ))
      ) : (
        <>
          <UvIndexCard title="UV Index" />
          <WindStatusCard
            title="Wind Status"
            windSpeed={TodayWeather?.wind?.speed || 0}
          />
          <SunDetailsCard
            title="Sunrise & Sunset"
            sunSet={dayjs(cityData?.sunset).format("hh:mm A")}
            sunRise={dayjs(cityData?.sunrise).format("hh:mm A")}
          />

          <HumidityCard
            title={"Humidity"}
            humidity={TodayWeather?.main?.humidity || 0}
          />
          <VisibilityCard
            title="Visibility"
            visibility={TodayWeather?.visibility || 0 / 1000}
          />
          <AirQualityCard title={"Air"} humidity={0} />
        </>
      )}
    </div>
  </div>
  )
}

export default HightLights