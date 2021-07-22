import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleignIn,inverted, ...otherProps }) => (
  <button
    className={`custom-button  ${inverted ? "inverted" : ""} ${isGoogleignIn ? "google-sign-in" : ""}`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton;
