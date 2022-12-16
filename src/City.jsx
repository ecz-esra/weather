import React from 'react';
const City = (weatherDetails) => {
  const data = weatherDetails.weatherDetails;
  console.log(data);
  return (
    <div>
      <p>City:{data?.name}</p>
      <p>Temperature:{data?.main?.temp}</p>
      <p>Feels_like:{data?.main?.feels_like}</p>
    </div>
  );
};
export default City;