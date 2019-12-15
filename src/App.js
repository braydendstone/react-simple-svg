import React from "react";
import logo from "./logo.svg";
import fire from "./images/fire.svg";
import Animator from "./Animator";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Animator fill="red" stroke="rgba(0,0,0,1)" strokeWidth="20px" animation="fade-in" duration="2s">
        {fire}
      </Animator>
    </div>
  );
}

export default App;
