import './weatherInfo.css'


export default function WeatherInfo({temp,language,translations}){


  return(
  <div key={temp.dt} className="weather-info">
  <p>{translations[language].currentTemperature}: {temp.main.temp} K</p>
  <p>{translations[language].maxTemperature}: {temp.main.temp_max} K</p>
  <p>{translations[language].minTemperature}: {temp.main.temp_min} K</p>
  <p>{translations[language].dayandTime}: {temp.dt_txt}</p>
  <img
    src={`http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`}
    alt="Weather Icon"
    className="weather-icon"
  />
</div>
  )
}