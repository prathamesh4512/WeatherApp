export const convertKelvinToCelsius = (tempInKelvin: number): number =>{
    return Math.floor(tempInKelvin - 273.15); // Removes decimal part and keeps integer part
  }

export const convertKelvinToFahrenheit = (tempInKelvin:number):number =>{
    return Math.floor((tempInKelvin-273.15)*1.8 + 32)
}