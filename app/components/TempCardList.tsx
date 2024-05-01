import React from 'react'
import TempCard from './DayTempCard'
import { Skeleton } from 'antd'
import dayjs from 'dayjs'
import { DAYS } from '../utils/constant'
import { WeatherTypes } from '../types/WeatherTypes'

type Props = {
    convertTemp:Function;
    loading:Boolean;
    weatherData:WeatherTypes[] | undefined;
    day:string;
}

const TempCardList = ({loading,convertTemp,weatherData,day}: Props) => {



  return (
    <div className="flex gap-3 justify-evenly">
    {loading
      ? Array(7)
          .fill(0)
          ?.map((_, idx) => (
            <Skeleton.Button
              active
              key={idx}
              style={{ height: "90px", width: "140px" }}
            />
          ))
      : weatherData?.slice(0, 7)?.map((ele) => (
          <TempCard
            iconName={ele?.weather?.[0]?.icon}
            // day={DAYS[dayjs(ele?.dt_txt).day()]}
            day={
              day == "day"
                ? dayjs(ele?.dt_txt).hour() +
                  ":" +
                  dayjs(ele?.dt_txt).minute()
                : DAYS[dayjs(ele?.dt_txt).day()]
            }
            min={convertTemp(ele?.main?.temp_min)}
            max={convertTemp(ele?.main?.temp_max)}
            key={ele?.id}
          />
        ))}
  </div>
  )
}

export default TempCardList