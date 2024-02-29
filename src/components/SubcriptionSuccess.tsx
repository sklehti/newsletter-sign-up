import * as React from "react";
import { Subcription } from "../types";
import succesIcon from "../images/icon-success.svg";

const SubcriptionSuccess = ({ setSubscription }: Subcription) => {
  return (
    <div className="submitted-container">
      <div className="submitted-layout">
        <div className="mobile-info-centered">
          <div style={{ padding: "0px 0 20px 0" }}>
            <img
              className="success-icon-style"
              src={succesIcon}
              alt="success icon"
            />
          </div>

          <h2>Thanks for subscribing! </h2>
          <p>
            A confirmation email has been sent to ash@loremcompany.com. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <div className="dismiss-btn">
          <button onClick={() => setSubscription(true)} className="form-btn">
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubcriptionSuccess;
