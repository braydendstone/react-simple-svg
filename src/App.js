import React from "react";
import logo from "./logo.svg";
import fire from "./images/fire.svg";
import Animator from "./Animator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Animator fill="red" stroke="white" strokeWidth="20px" animation="fade-in-stroke" duration="5s">
        {fire}
      </Animator>
    </div>
  );
}

export default App;
