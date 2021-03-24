import React, { useState, useEffect ,useMemo} from 'react'
import axios from 'axios'

export default function CovidTracker({ updateCountry }) {

    const [countries, setCountries] = useState([])

    const api = useMemo(() => axios.create({
        baseURL: 'https://api.covid19api.com',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }),[]);
    useEffect(() => { api.get('/countries').then(res => setCountries(_ => res.data)) }
        , [updateCountry,api]);

    let items = [];
    countries.forEach(c => items.push(<option key={c.Slug} value={c.Slug}>{c.Country}</option>));
    return <div className="select">
        <label style={{color:"white",marginLeft:"10px"}}>Country : <br />  </label>
        <select className="slct" id="slct" style={{ marginLeft: "5px" }} onChange={(e) => updateCountry(e.target.value)}>{items}</select></div>

}