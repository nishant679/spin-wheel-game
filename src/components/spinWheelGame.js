import React from "react";
import wellImg from "../assets/wheeel.png";
import "../scss/spinWheelGame.scss";
import phoneIcon from "../assets/phone.png";
import closeIcon from "../assets/close.png";
import emailIcon from "../assets/email.png";

const SpinWheelGame = () => {
  return (
    <div className="main-container">
      <div className="img-container">
        <img src={wellImg} alt="wheel" className="wheel-img" />
      </div>
      <div className="user-form">
        <div className="title">
          <h2>This is how EngageBud</h2>
          <h2>looks like in action!</h2>
        </div>
        <div className="email">
          <div className="icon">
            <img src={emailIcon} alt="email" />
          </div>
          <div className="inp">
            <label>Email:</label>
            <input type="text" />
          </div>
        </div>
        <div className="phone">
          <div className="icon">
            <img src={phoneIcon} alt="email" />
          </div>
          <div className="inp">
            <label>Phone:</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <div className="concent">
          <input type="checkbox" checked />
          <div>
            <p>
              I agree to receiving recurring automated messages at the number I
              have provided. Consent is not a condition to purchase.
            </p>
          </div>
        </div>
        <button type="button" className="submit-btn">
          Try your luck
        </button>
        <div className="info">
          <span>*You can spin the wheel only once!</span>
          <span>
            *If you win, you can claim your coupon for 10 minutes only!
          </span>
        </div>
        <div className="discline">
          <span>No, I don’t feel lucky</span>
          {/* <button type="button">X</button> */}
          <span className="close">
            <img src={closeIcon} alt="x" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpinWheelGame;
