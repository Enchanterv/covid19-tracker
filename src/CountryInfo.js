import axios from 'axios'
import React, { useState } from 'react'
import DataGraph from './DataGraph'


export default function CountryInfo({ selectedCountry }) {

    const [countryData, setCountryData] = useState([selectedCountry]);
    const [apiData, setApiData] = useState([]);

    React.useEffect(() => { api.get(`/total/country/${selectedCountry}`)
    .then(res =>{setApiData(_=>res.data) ;
        setCountryData(_ => res.data[res.data.length -1])}) }, [selectedCountry])

    const api = axios.create({ baseURL: `http://api.covid19api.com`, method: 'get' })

    return <div className="country-data">
        <DataGraph apiData={apiData}/>
        <div  className="data-records">
        
        <div className="data c" >Confirmed <br/> {countryData?.Confirmed}</div>
        <div className="data d">Deaths    <br/>  {countryData?.Deaths}</div>
        <div className="data a">Active    <br/> {countryData?.Active}</div>
        <div className="data r">Recovered <br/>  {countryData?.Recovered}</div>
    </div></div>
}