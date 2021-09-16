import React from "react";
import TouristInfoCards from "./components/TouristInfoCards";
import Bookings from "./components/Bookings";
import "./App.css";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards />
    </div>
  );
};

export default App;
