import React,{useState} from 'react'

import CovidTracker from './Covidtracker'
import CountryInfo from './CountryInfo'
import './App.css';


function App() {

const [selectedCountry,setSelectedCountry] =useState("Chile")

const updateCountry = (country) => setSelectedCountry(_=> country);

  return (
    <div className="App" >
      <div className="heading">Covid 19 Tracker</div>
<CovidTracker  updateCountry={updateCountry} />

<CountryInfo selectedCountry={selectedCountry} />
    </div>
  );
}

export default App;
