import React, { useState } from 'react';
import Titles from './components/titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '8117032b43375b398485e40333d6f5ae';

class App extends React.Component {
  //   constructor(props) {   dont need this if using react 16
  //     super(props);
  //     this.state = {};
  //   }

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    desc: undefined,
    error: undefined,
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    //convert api_call to json format and assign to const data
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      //set state to display results
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        desc: undefined,
        error: 'Please enter City and Country',
      });
    }
  };
  render() {
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
                  <Form getWeather={this.getWeather} />
                  {/*pass states as props to Weather component to display results*/}
                  <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    desc={this.state.desc}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
