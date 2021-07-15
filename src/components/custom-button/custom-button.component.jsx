import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleignIn, ...otherProps }) => (
  <button
    className={`custom-button ${isGoogleignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
