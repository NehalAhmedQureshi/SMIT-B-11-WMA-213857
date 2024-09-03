import { useState, useEffect } from 'react';
import CustomButton from './components/button';
import CustomInput from './components/customInput';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [city, setCity] = useState('karachi');
  const [inputValue, setInputValue] = useState('');
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (city) {
      setLoadingMessage('Fetching weather data...');
      setErrorMessage(null);  // Clear any previous error message
      getWeather();
    }
  }, [city]);

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=750b9f971f71bda4db3e75d05c60f22d`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`City not found: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCurrentWeather(data);
        setLoadingMessage('');
        setErrorMessage('');
      })
      .catch((error) => {
        setLoadingMessage('');
        setErrorMessage(error.message || 'Unknown error occurred');
      });
  };

  const temp = currentWeather?.main?.temp
    ? Math.round(currentWeather?.main?.temp - 273.15)
    : null;
  const feels_like = currentWeather?.main?.feels_like
    ? Math.round(currentWeather?.main?.feels_like - 273.15)
    : null;
  const humidity = currentWeather?.main?.humidity;
  const pressure = currentWeather?.main?.pressure;
  const cityName = currentWeather?.name;
  const description = currentWeather?.weather?.[0]?.description;
  const clouds = currentWeather?.clouds?.all;
  const rain = currentWeather?.rain?.['1h'];
  const windSpeed = currentWeather?.wind?.speed
    ? Math.round(currentWeather?.wind?.speed * 3.6)
    : null;
  const icon = currentWeather?.weather?.[0]?.icon;
  const iconUrl = icon
    ? `http://openweathermap.org/img/w/${icon}.png`
    : null;

  return (
    <div className="main">
      <CustomInput
        value={inputValue}
        onchange={(e) => {
          setInputValue(e.target.value);
          setLoadingMessage('');
          setErrorMessage('');
        }}
        placeHolder={'Enter Your City Name'}
        className={'cityNameInput'}
      />

      <CustomButton
        content={'Search'}
        onclick={() => {
          if (inputValue) {
            setCity(inputValue);
            setInputValue(''); // Clear the input after search
          }
        }}
      />

      {loadingMessage && <h3>{loadingMessage}</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}

      {currentWeather && !errorMessage && (
        <div className="showWeather">
          <h1>{cityName || 'Unknown City'}</h1>
          {temp !== null && <h1>{`${temp} C`}</h1>}
          <h1>{description || 'No description available'}</h1>
          {iconUrl && <img src={iconUrl} alt="Weather icon" width="150px" />}
          {feels_like !== null && (
            <h3 className="feels_like">{`Feels like: ${feels_like} C`}</h3>
          )}
          {pressure && (
            <h3 className="pressure">{`Pressure: ${pressure} hPa`}</h3>
          )}
          {humidity && (
            <h3 className="humidity">{`Humidity: ${humidity} %`}</h3>
          )}
          {clouds !== undefined && (
            <h3 className="clouds">{`Clouds: ${clouds} %`}</h3>
          )}
          {windSpeed !== null && (
            <h3 className="windSpeed">{`Wind Speed: ${windSpeed} km/h`}</h3>
          )}
          {rain !== undefined && (
            <h3 className="rain">{`Rain: ${rain} mm`}</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
