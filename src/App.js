import React from "react";
import logo from "./logo.svg";
import fire from "./images/fire.svg";
import SimpleSVG from "./SimpleSVG";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SimpleSVG
        image={fire}
        fill="red"
        stroke="white"
        strokeWidth="100px"
        width="500px"
        animation='spin'
        duration='2s'
        iterationCount={3}
        timingFunction='linear'
        // animationNames={['spin','fade-in-fill', 'fade-in-stroke']}
        // animationDurations={['5s','0.5s', '3s']}
        // animationIterationCounts={['infinite','','']}
        // animationTimingFunctions={['linear','','']}
      />
    </div>
  );
}

export default App;
