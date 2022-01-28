import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWeatherData } from '../app/reducers/cities/cities.actions';

export default ({city }: any) => {

  const dispatch = useDispatch();
  const {cities} : any = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const apiKey = 'e6d867c63d8afa256b3701952b23b680';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await getWeatherData(dispatch, apiCall);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getTemperature = (data: any) => {
    const response = cities.find((item : any) => item.name === data);

    return (
      <div>
        <p>
          {(response.main.temp - 273.15).toFixed(2)}
          &nbsp; Celsius
        </p>
        <p>{new Date(Date.now() - response.timezone).toISOString().slice(11, -5)}</p>
      </div>
    );
    
  };

  if (loading) {
    return null;
  }


  return (
    <div>
      <h1>{city}</h1>
      {getTemperature(city)}
    </div>
  );
};