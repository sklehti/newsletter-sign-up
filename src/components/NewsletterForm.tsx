/**
 * Note! You can use Formik in future: https://formik.org/docs/guides/typescript
 * or React Hook Form: https://react-hook-form.com/
 * because they are written in TypeScript.
 */

import React, { useState } from "react";
import { User } from "../utils";
import { Subcription } from "../types";

const NewsletterForm = ({ setSubscription }: Subcription) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsvalid] = useState(true);

  /**
   * Check that the email is correctly written
   * and after that submit the form
   * @param e
   */
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const result = User.safeParse({ email: email });

    if (result.success) {
      setEmail("");
      setSubscription(false);

      console.log("User data is valid " + result.data.email);
    } else {
      setIsvalid(false);

      console.log("User data is invalid");
      console.log(result.error);
    }
  };

  return (
    <form className="form-layout" onSubmit={handleSubmit}>
      <div className="email-alert-text-layout">
        <label className="email-style" htmlFor="email">
          Email address
        </label>
        <label
          className={isValid ? "alert-hide" : "alert-text-style"}
          htmlFor="alert text"
        >
          Valid email required
        </label>
      </div>

      <input
        className={isValid ? "" : "invalid-input"}
        placeholder="email@company.com"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
          setIsvalid(true);
        }}
      />
      <button className="form-btn" type="submit">
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default NewsletterForm;
