import React, { useState, useEffect } from "react";
import "../scss/spinnerPage.scss";
import spinWheel from "../assets/spinner.png";

const SpinnerPage = () => {
  const [spin, setSpin] = useState(false);

  const rotateWheel = () => {
    setSpin(true);
    setTimeout(() => {
      setSpin(false);
    }, 4000);
  };
  return (
    <div className="spinner-main">
      <div className="wheel-container">
        <img
          src={spinWheel}
          alt="spin"
          className={!spin ? "i" : "spin-the-wheel"}
        />
      </div>
      <div>
        <button type="button" className="submit-btn" onClick={rotateWheel}>
          SPIN
        </button>
      </div>
    </div>
  );
};

export default SpinnerPage;
