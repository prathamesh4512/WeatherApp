
export type WeatherTypes = {
    id:number;
    main: { temp: number,humidity:number,temp_max:number,temp_min:number };
    weather: [{ description: string,icon:string; }];
    rain: { "3h": number };
    dt_txt: string;
    wind:{speed:number}
    visibility:number;
  }

export type cityDataType = {
    sunset: number;
    sunrise: number;
    cityImage?:string;
  }