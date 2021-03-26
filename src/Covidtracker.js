import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import CountryInfo from './CountryInfo'


export default function CovidTracker() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Chile");

  const api = useMemo(
    () =>
      axios.create({
        baseURL: "https://api.covid19api.com",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }),
    []
  );
  useEffect(() => {
    api.get("/countries").then((res) => setCountries((_) => res.data));
  }, [api]);

  let items = [];
  countries.forEach((c) =>
    items.push(
      <option key={c.Slug} value={c.Slug}>
        {c.Country}
      </option>
    )
  );
  return (
    <div style={{margin:"auto"}}>
      <div className="select">
        <label style={{ color: "white", marginLeft: "10px" }}>
          Country : <br />{" "}
        </label>
        <select
          className="slct"
          id="slct"
          style={{ marginLeft: "5px" }}
          onChange={(e) => setSelectedCountry(_=> e.target.value)}
        >
          {items}
        </select>
      </div>
      <CountryInfo selectedCountry={selectedCountry} />
    </div>
  );
}
