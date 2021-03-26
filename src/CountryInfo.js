import axios from "axios";
import React, { useState, useMemo } from "react";
import DataGraph from "./DataGraph";

export default function CountryInfo({ selectedCountry }) {
  const [countryData, setCountryData] = useState({});
  console.log("countryData : ", countryData,typeof countryData==='undefined');
  const [apiData, setApiData] = useState([]);
  const api = useMemo(
    () =>
      axios.create({ baseURL: `https://api.covid19api.com`, method: "get" }),
    []
  );

  React.useEffect(() => {
    api.get(`/total/country/${selectedCountry}`).then((res) => {
      setApiData((_) => res.data);
      setCountryData((_) => res.data[res.data.length - 1]);
    });
  }, [selectedCountry, api]);

  return (typeof countryData === 'undefined') 
     ? (
    <div style={{marginTop:"5px"}}>Missing data!!.You can try other countries ,while we fix this.</div>
  ) : (
    <div className="country-data">
      <DataGraph apiData={apiData} />
      <div className="data-records">
        <div className="data c">
          Confirmed <br /> {countryData.Confirmed}
        </div>
        <div className="data d">
          Deaths <br /> {countryData.Deaths}
        </div>
        <div className="data a">
          Active <br /> {countryData.Active}
        </div>
        <div className="data r">
          Recovered <br /> {countryData.Recovered}
        </div>
      </div>
    </div>
  );
}
