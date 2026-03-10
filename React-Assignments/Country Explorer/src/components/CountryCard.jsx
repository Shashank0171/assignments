import React from "react";

function CountryCard({ country }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={country.flags.png}alt={country.name.common} className="w-full h-32 object-cover rounded"/>
      <h2 className="font-bold mt-2"> {country.name.common} </h2>
      <p><strong>Capital:</strong>{" "} {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p><strong>Population:</strong>{" "} {country.population.toLocaleString()}</p>
      <p> <strong>Region:</strong> {country.region}</p>
    </div>
  );
}

export default CountryCard;