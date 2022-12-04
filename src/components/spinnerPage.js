import React, { useState, useEffect } from "react";
import "../scss/spinnerPage.scss";
import spinWheel from "../assets/spinner.png";
import clap from "../assets/cheer.mp3";
import { useHistory } from "react-router-dom";
import Confetti from "react-confetti";
const audio1 = new Audio(clap);

const SpinnerPage = () => {
  const [spin, setSpin] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = [300, 200];
  const history = useHistory();

  const rotateWheel = () => {
    setSpin(true);
    setTimeout(() => {
      setShowConfetti(true);
      audio1.play();
    }, 2000);
    setTimeout(() => {
      setSpin(false);
    }, 4000);
    setTimeout(() => {
      setShowConfetti(false);
      audio1.pause();
      history.push("/");
    }, 8000);
  };
  return (
    <div className="spinner-main">
      {showConfetti && <Confetti width={width} height={height} run={true} />}
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
