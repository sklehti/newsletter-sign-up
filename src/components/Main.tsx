import React, { useState } from "react";
import desktopImg from "../images/illustration-sign-up-desktop.svg";
import mobileImg from "../images/illustration-sign-up-mobile.svg";
import NewsletterForm from "./NewsletterForm";
import { Subcription } from "../types";

const Main = ({ setSubscription }: Subcription) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      className="container"
      style={{ visibility: imgLoaded ? "visible" : "hidden" }}
    >
      <div className="centered-element">
        <div>
          <img
            className="mobile-img"
            src={mobileImg}
            alt="mobile image"
            onLoad={() => setImgLoaded(true)}
          />

          <div className="form-info">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>

            <ul className="ul-list">
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>

            <NewsletterForm setSubscription={setSubscription} />
          </div>
        </div>

        <div>
          <img
            className="desktop-img"
            src={desktopImg}
            alt="desktop image"
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
