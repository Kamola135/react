import React from "react";
import Welcome from "./pages/Welcome";
import "./styles/main.css";
import StepTwo from "./pages/StepTwo";
import StepOne from "./pages/StepOne";

const App = () => {
  return (
    <div className="App">
      <Welcome />
      <StepOne />
      <StepTwo />
    </div>
  );
};

export default App;
