import React from "react";
import CarList from "./redux/container/car-list";
import CarInfo from "./redux/container/car-info";

function App() {
  return (
    <div>
      <CarList />
      <hr></hr>
      <CarInfo />
    </div>
  );
}

export default App;
