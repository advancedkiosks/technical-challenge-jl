import React from 'react';
import CityComponent from './cityComponent';

export default () => {
  const cities = ['Belgrade', 'Moscow', 'Seattle', 'Prague', 'London'];

  return (
    <span>
      {cities.map((city) => <CityComponent key={Math.random()} city={city} />)}
    </span>
  );
};

