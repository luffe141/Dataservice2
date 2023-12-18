import React from "react";

const WeatherCard = ({data}) => {
  return (
    <article>
      <h1>Skriv et post nr</h1>
      <input
        type="text"
        placeholder="intast post nr"
        value={zip}
        onChange={(e) => {
          setZip(e.target.value);
          setValid(e.target.checkValidity);
        }}
        required
        pattern="[0-9]{4}"
      />
      <h2>Vejret i {data.name}</h2>
      <h3>Temperatur:{Math.round(data.main.temp)}&deg;C</h3>
    </article>
  );
};

export default WeatherCard;
