import React, {useState} from 'react';

//function component
function Form({fetchWeather}) {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    fetchWeather(e, city, country);
    setCity('');
    setCountry('');
  }
  
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input type="text" name="city" placeholder="City..." onChange={(e) => {setCity(e.target.value)}}/>
      <input type="text" name="country" placeholder="Country..." onChange={(e) => {setCountry(e.target.value)}}/>
      <button>Get Weather</button>
    </form>
  );
}

export default Form;