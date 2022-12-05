import React, { useState, useRef } from "react";
import "../scss/spinnerPage.scss";
import spinWheel from "../assets/spinner.png";
import wellImg from "../assets/wheeel.png";
import clap from "../assets/cheer.mp3";
import spinSound from "../assets/spinSound.mp3";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
const audio1 = new Audio(clap);
const audio2 = new Audio(spinSound);

const SpinnerPage = () => {
  const [spin, setSpin] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = [300, 200];
  const [showCoupon, setShowCoupon] = useState(false);
  const history = useNavigate();
  const clipboard = useRef();

  const copyToClipboard = (e) => {
    const text = clipboard.current;
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const rotateWheel = () => {
    setSpin(true);
    audio2.play();
    setTimeout(() => {
      setShowConfetti(true);
      audio1.play();
    }, 2000);
    setTimeout(() => {
      setSpin(false);
      audio2.pause();
    }, 4000);
    setTimeout(() => {
      setShowCoupon(true);
    }, 5000);
    setTimeout(() => {
      setShowConfetti(false);
      audio1.pause();
      // history("/");
    }, 8000);
  };
  return (
    <div className="tab-bg">
      <div className="spinner-main">
        {showConfetti && <Confetti width={width} height={height} run={true} />}
        {!showCoupon ? (
          <>
            <div className="wheel-container">
              <LazyLoadImage
                src={spinWheel}
                alt="spin"
                className={!spin ? "i" : "spin-the-wheel"}
              />
            </div>
            <div>
              <button
                type="button"
                className="submit-btn"
                onClick={rotateWheel}
              >
                SPIN
              </button>
            </div>
          </>
        ) : (
          <div className="offer-container">
            <div className="img-container">
              <LazyLoadImage src={wellImg} alt="wheel" className="wheel-img" />
            </div>
            <div className="user-form">
              <h3 className="msg">Congrats! You Won:</h3>
              <h2 className="title">20% Off Coupon on Best Sellers</h2>

              <div className="clipboard">
                <input type="text" ref={clipboard} value="XAXPDF20" />

                <button type="button" onClick={copyToClipboard}>
                  COPY
                </button>
              </div>
              <button
                type="button"
                className="close-btn"
                onClick={() => history("/")}
              >
                close Panel &amp; Copy
              </button>
              <span className="info">
                *You can claim your coupon for 10 minutes only!
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpinnerPage;
