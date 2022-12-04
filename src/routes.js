import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SpinWheelGameS from "./components/spinWheelGame";
import SpinnerPage from "./components/spinnerPage";

const RouteMain = () => {
  console.log("On React Router");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          component={SpinWheelGameS}
          element={<SpinWheelGameS />}
        />
        <Route path="/spin_wheel" exact element={<SpinnerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteMain;
