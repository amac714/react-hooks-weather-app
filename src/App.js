import React, { useState } from 'react';
import Titles from './components/titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8117032b43375b398485e40333d6f5ae';

//function component
function App() {

  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [ error, setError ] = useState(undefined);
  const [ temp, setTemp ] = useState(undefined);
  const [ humidity, setHumidity ] = useState(undefined);
  const [ desc, setDesc ] = useState(undefined);

  const fetchWeather = async (e, city, country) => {
    try {
      e.preventDefault();
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      //convert api_call to json format and assign to const data
      const data = await api_call.json();
      console.log(data);
      setCity(data.name);
      setCountry(data.sys.country);
      setTemp(data.main.temp);
      setHumidity(data.main.humidity);
      setDesc(data.weather[0].description);
      setError('');
    } catch(err) {
      console.log(err);
      setError('Please enter city and country');
      setCity('');
      setCountry('');
      setTemp('');
      setHumidity('');
      setDesc('');
    }
  }

  return (
    <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
                {/*pass getWeather as a prop to Form*/}
                <Form fetchWeather={fetchWeather}/>
                {/*pass states as props to Weather component to display results*/}
                <Weather
                  temp={temp}
                  city={city}
                  country={country}
                  humidity={humidity}
                  desc={desc}
                  error={error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
