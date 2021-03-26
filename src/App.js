import React from "react";

import CovidTracker from "./Covidtracker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="heading">Covid 19 Tracker</div>
      <CovidTracker updateCountry/>
    </div>
  );
}

export default App;
