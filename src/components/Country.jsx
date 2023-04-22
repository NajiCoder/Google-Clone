"use client";

import React, { use, useEffect, useState } from "react";

export default function Country() {
  const [country, setCountry] = useState("Mauritania");

  const successCallback = async (position) => {
    const { latitude, longitude } = position.coords;
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=country&key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const data = await res.json();
    if (data.results.length > 0) {
      const countryName = data.results[0].formatted_address;
      setCountry(countryName);
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <>
      <div>{country}</div>
    </>
  );
}
