import React from 'react';

//function component as an arrow function
const Weather = props => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">
          Location:  
          <span className="weather__value"> {props.city}, {props.country}</span>
        </p>
      )}

    {props.temp && (
      <p className="weather__key">
        Temperature: 
         <span className="weather__value"> {(props.temp * 9/5) + 32} °F</span>
      </p>
    )}

    {props.humidity && (
      <p className="weather__key">
        Humidity: 
         <span className="weather__value"> {props.humidity}</span>
      </p>
    )}

    {props.desc && (
      <p className="weather__key">
        Description: 
         <span className="weather__value"> {props.desc}</span>
      </p>
    )}

    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
