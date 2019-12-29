import React from "react";
import logo from "./logo.svg";
import fire from "./images/fire.svg";
import Animator from "./Animator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Animator
        image={fire}
        fill="red"
        stroke="white"
        strokeWidth="20px"
        animation="fade-in-stroke"
        duration="5s"
      />
    </div>
  );
}

export default App;
