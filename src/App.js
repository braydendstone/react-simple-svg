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
        strokeWidth="20px"
        animationNames={['fade-in-fill', 'fade-in-stroke']}
        animationDurations={['0.5s', '3s']}
      />
    </div>
  );
}

export default App;
