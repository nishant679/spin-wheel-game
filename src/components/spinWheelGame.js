import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import wellImg from "../assets/wheeel.png";
import "../scss/spinWheelGame.scss";
import phoneIcon from "../assets/phone.png";
import closeIcon from "../assets/close.png";
import emailIcon from "../assets/email.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SpinWheelGame = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // const validatePhone = (phone) => {
  //   // const re = ^((\+1)?[\s-]?)?\(?[1-9]\d\d\)?[\s-]?[1-9]\d\d[\s-]?\d\d\d\d;
  //   // return re.test(phone);
  // };

  const saveUser = () => {
    console.log("Validating Email", validateEmail(email));
    if (validateEmail(email) && phone.length > 9) {
      history("/spin_wheel");
    } else {
      alert("Please Enter Valid Email and phone number");
    }
  };

  return (
    <div className="tab-bg">
      <div className="main-container">
        <div className="img-container">
          <LazyLoadImage src={wellImg} alt="wheel" className="wheel-img" />
        </div>
        <div className="user-form">
          <div className="title">
            <h2>This is how EngageBud looks like in action!</h2>
          </div>
          <div className="email">
            <div className="icon">
              <LazyLoadImage src={emailIcon} alt="email" />
            </div>
            <div className="inp">
              <label>Email:</label>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="phone">
            <div className="icon">
              <LazyLoadImage src={phoneIcon} alt="email" />
            </div>
            <div className="inp">
              <label>Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="concent">
            <input
              type="checkbox"
              checked={checked}
              className="checkbox"
              onChange={() => setChecked((prev) => !prev)}
            />
            <div>
              <p>
                I agree to receiving recurring automated messages at the number
                I have provided. Consent is not a condition to purchase.
              </p>
            </div>
          </div>
          <button type="button" className="submit-btn" onClick={saveUser}>
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
              <LazyLoadImage src={closeIcon} alt="x" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheelGame;
