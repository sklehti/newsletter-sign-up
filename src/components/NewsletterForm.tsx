/**
 * Note! should i use Formik: https://formik.org/docs/guides/typescript
 * or React Hook Form: https://react-hook-form.com/
 * becouse they are written in TypeScript.
 */

import React, { useState } from "react";
import { User } from "../utils";
import { Subcription } from "../types";

const NewsletterForm = ({ setSubscription }: Subcription) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsvalid] = useState(true);

  //   const validateEmail = (email: string) => {
  //     const regex =
  //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //     return regex.test(email);
  //   };

  //   const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
  //     setEmail(e.currentTarget.value);
  //     setIsvalid(true);

  //     if (validateEmail(email)) {
  //       // email is valid
  //       console.log("email is valid");
  //     } else {
  //       // email is invalid
  //       console.log("email is invalid");
  //     }
  //   };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const result = User.safeParse({ email: email });

    if (result.success) {
      setEmail("");
      setSubscription(false);

      console.log("User data is valid" + result.data.email);
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
        // type="email"
        className={isValid ? "" : "invalid-input"}
        placeholder="email@company.com"
        value={email}
        // onChange={handleInput}
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
